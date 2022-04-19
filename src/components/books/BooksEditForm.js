import { useState } from "react";
import { Link } from "react-router-dom";

const BooksEditForm = () => {
  const [thumbnailImage, setThumbnailImage] = useState();
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
    type: "BOOK",
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
    type,
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

  const imageChange1 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setThumbnailImage(e.target.files[0]);
    }
  };
  const imageChange2 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverImage(e.target.files[0]);
    }
  };
  console.log(thumbnailImage, coverImage);

  const TextFormArray = [
    { value: libraryName, name: "libraryName", label: "도서관 이름" },
    { value: title, name: "title", label: "책 제목" },
    { value: author, name: "author", label: "저자" },
    { value: translator, name: "translator", label: "번역" },
    { value: publisher, name: "publisher", label: "출판사" },
    { value: barcode, name: "barcode", label: "바코드" },
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
    { value: 0, label: "총류" },
    { value: 100, label: "철학" },
    { value: 200, label: "종교" },
    { value: 300, label: "사회과학" },
    { value: 400, label: "순수과학" },
    { value: 500, label: "기술과학" },
    { value: 600, label: "예술" },
    { value: 700, label: "언어" },
    { value: 800, label: "문학" },
    { value: 900, label: "역사" },
  ];

  console.log(inputs);
  return (
    <div id="BookEditForm">
      <form>
        <div className="input-form">
          <div className="input-box">
            <div className="image-area">
              <div className="image-box">
                <div className="preview">
                  {thumbnailImage && (
                    <div>
                      <img
                        className="image"
                        src={URL.createObjectURL(thumbnailImage)}
                        alt="Thumb"
                      />
                    </div>
                  )}
                </div>
                <label className="thumbnail-label">
                  썸네일 이미지
                  <input
                    type="file"
                    accept="image/*"
                    name="thumbnailImage"
                    className="thumbnailImage"
                    onChange={imageChange1}
                  />
                </label>
              </div>

              <div className="image-box">
                <div className="preview">
                  {coverImage && (
                    <div>
                      <img
                        className="image"
                        src={URL.createObjectURL(coverImage)}
                        alt="Thumb"
                      />
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
                    defaultValue={tfa.value}
                    onChange={onChange}
                  />
                </label>
              ))}
              <label>
                ISBN
                <input
                  type="number"
                  name="isbn"
                  defaultValue={isbn}
                  className="isbn"
                  onChange={onChange}
                />
              </label>
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
                  name="type"
                  defaultValue={type}
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
                  defaultValue={genre}
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
                  defaultValue={bookStatus}
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
              <label>
                카테고리
                <select
                  name="category"
                  id="categories"
                  defaultValue={category}
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
              <div className="contents">
                <textarea
                  name="contents"
                  id="contents"
                  defaultValue={contents}
                  className="contents"
                  onChange={onChange}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="btn-box">
            <Link to="/books">
              <button type="submit" className="edit-btn">
                수정
              </button>
            </Link>
            <button type="button" className="delete-btn">
              삭제
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BooksEditForm;