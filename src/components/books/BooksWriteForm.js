import { useState } from "react";
import axios from "axios";

// libraryid
const BooksWriteForm = () => {
  const [thumbNailImage, setThumbnailImage] = useState();
  const [coverImage, setCoverImage] = useState();
  const [inputs, setInputs] = useState({
    libraryName: "",
    isbn: "",
    title: "",
    author: "",
    translator: "",
    contents: "",
    publisher: "",
    publishDate: "",
    rfid: "",
    bookType: "BOOK",
    genre: "ACTION",
    barcode: "",
    bookStatus: "AVAILABLE",
    category: "총류",
  });

  const {
    libraryName,
    isbn,
    title,
    author,
    translator,
    contents,
    publisher,
    publishDate,
    rfid,
    bookType,
    genre,
    barcode,
    bookStatus,
    category,
  } = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  console.log(inputs);
  const imageChange1 = (e) => {
    setThumbnailImage(URL.createObjectURL(e.target.files[0]));
  };
  const imageChange2 = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };
  // console.log(thumbNailImage, coverImage);

  const TextFormArray = [
    { value: libraryName, name: "libraryName", label: "도서관 이름" },
    { value: title, name: "title", label: "책 제목" },
    { value: author, name: "author", label: "저자" },
    { value: translator, name: "translator", label: "번역" },
    { value: publisher, name: "publisher", label: "출판사" },
    { value: barcode, name: "barcode", label: "바코드" },
    { value: isbn, name: "isbn", label: "ISBN" },
    { value: rfid, name: "rfid", label: "rfid" },
  ];

  const GenreOptionArray = [
    { value: "ACTION", label: "액션" },
    { value: "SF_AND_FANTASY", label: "SF/판타지" },
    { value: "COMEDY", label: "코미디" },
    { value: "ROMANCE", label: "로맨스" },
    { value: "HORROR_AND_THRILLER", label: "공포/스릴러" },
    { value: "OTHERS", label: "기타" },
  ];

  const BookStatusOptionArray = [
    { value: "AVAILABLE", label: "대여 가능" },
    { value: "STORAGE", label: "창고 보관" },
    { value: "LOST", label: "분실" },
    { value: "DISCARD", label: "폐기" },
  ];

  const CategoryOptionArray = [
    { value: "총류", label: "총류" },
    { value: "철학", label: "철학" },
    { value: "종교", label: "종교" },
    { value: "사회과학", label: "사회과학" },
    { value: "순수과학", label: "순수과학" },
    { value: "기술과학", label: "기술과학" },
    { value: "예술", label: "예술" },
    { value: "언어", label: "언어" },
    { value: "문학", label: "문학" },
    { value: "역사", label: "역사" },
  ];

  // console.log(inputs);
  return (
    <div id="BookWriteForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(
              "http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/books",
              {
                libraryName: libraryName,
                isbn: isbn,
                title: title,
                author: author,
                translator: translator,
                contents: contents,
                publisher: publisher,
                publishDate: publishDate,
                thumbNailImage: thumbNailImage,
                coverImage: coverImage,
                bookType: bookType,
                genre: genre,
                rfid: rfid,
                barcode: barcode,
                bookStatus: bookStatus,
                category: category,
              }
            )
            .then(function (response) {
              console.log(response);
              alert("도서가 등록되었습니다.");
            });
        }}
      >
        <div className="input-form">
          <div className="input-box">
            <div className="image-area">
              <div className="image-box">
                <div className="preview">
                  {thumbNailImage && (
                    <div>
                      <img className="image" src={thumbNailImage} alt="Thumb" />
                    </div>
                  )}
                </div>
                <label className="thumbnail-label">
                  썸네일 이미지
                  <input
                    type="file"
                    accept="image/*"
                    name="thumbNailImage"
                    className="thumbNailImage"
                    onChange={imageChange1}
                  />
                </label>
              </div>

              <div className="image-box">
                <div className="preview">
                  {coverImage && (
                    <div>
                      <img className="image" src={coverImage} alt="Thumb" />
                    </div>
                  )}
                </div>
                <label className="cover-label">
                  커버 이미지
                  <input
                    type="file"
                    accept="image/*"
                    name="coverImage"
                    className="coverImage"
                    onChange={imageChange2}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="text">
            <div className="text-form">
              {TextFormArray.map((tfa) => (
                <label key={tfa.name}>
                  {tfa.label}
                  <input
                    type="text"
                    name={tfa.name}
                    className={tfa.name}
                    value={tfa.value}
                    onChange={onChange}
                  />
                </label>
              ))}

              <label>
                출판일
                <input
                  type="date"
                  name="publishDate"
                  className="publishDate"
                  value={publishDate}
                  onChange={onChange}
                />
              </label>
              <label>
                타입
                <select
                  id="types"
                  name="bookType"
                  value={bookType}
                  className="type"
                  onChange={onChange}
                >
                  <option value="BOOK">도서</option>
                  <option value="NON_BOOK">비도서</option>
                </select>
              </label>
              <label>
                장르
                <select
                  id="genres"
                  name="genre"
                  value={genre}
                  className="genre"
                  onChange={onChange}
                >
                  {GenreOptionArray.map((goa) => (
                    <option key={goa.value} value={goa.value}>
                      {goa.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                도서 상태
                <select
                  id="bookStatuses"
                  name="bookStatus"
                  value={bookStatus}
                  className="bookStatus"
                  onChange={onChange}
                >
                  {BookStatusOptionArray.map((bsoa) => (
                    <option key={bsoa.value} value={bsoa.value}>
                      {bsoa.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="category-box">
                카테고리
                <select
                  name="category"
                  id="categories"
                  value={category}
                  className="category"
                  onChange={onChange}
                >
                  {CategoryOptionArray.map((coa) => (
                    <option key={coa.value} value={coa.value}>
                      {coa.label}
                    </option>
                  ))}
                </select>
              </label>
              <textarea
                name="contents"
                id="contents"
                value={contents}
                className="contents"
                onChange={onChange}
              ></textarea>
            </div>
          </div>

          <div className="btn-box">
            <button type="submit" className="edit-btn">
              등록
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BooksWriteForm;
