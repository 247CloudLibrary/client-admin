import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const BooksEditForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [thumbNailImage, setThumbNailImage] = useState(
    location.state.thumbNailImage
  );
  const [coverImage, setCoverImage] = useState(location.state.coverImage);

  const id = location.state.id;
  const [inputs, setInputs] = useState({
    libraryName: location.state.libraryName,
    isbn: location.state.isbn,
    title: location.state.title,
    author: location.state.author,
    translator: location.state.translator,
    contents: location.state.contents,
    publisher: location.state.publisher,
    publishDate: location.state.publishDate,
    type: location.state.type,
    genre: location.state.genre,
    barcode: location.state.barcode,
    bookStatus: location.state.bookStatus,
    category: location.state.category,
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
    setThumbNailImage(URL.createObjectURL(e.target.files[0]));
  };
  const imageChange2 = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };

  console.log(thumbNailImage, coverImage);

  imageChange1.onload = () => {
    URL.revokeObjectURL(thumbNailImage);
  };
  imageChange2.onload = () => {
    URL.revokeObjectURL(coverImage);
  };

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
    { value: "총류(0)", label: "총류" },
    { value: "철학(100)", label: "철학" },
    { value: "종교(200)", label: "종교" },
    { value: "사회과학(300)", label: "사회과학" },
    { value: "순수과학(400)", label: "순수과학" },
    { value: "기술과학(500)", label: "기술과학" },
    { value: "예술(600)", label: "예술" },
    { value: "언어(700)", label: "언어" },
    { value: "문학(800)", label: "문학" },
    { value: "역사(900)", label: "역사" },
  ];

  console.log(inputs);

  const deleteClick = (e) => {
    e.preventDefault();

    if (window.confirm("정말 삭제하시겠습니까?") === false) {
      return;
    } else {
      axios
        .patch(
          `http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/books/${id}`,
          { id: id }
        )
        .then(() => {
          alert("도서관이 삭제되었습니다.");
        });
    }
  };
  return (
    <div id="BookEditForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          axios
            .put(
              `http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/books/${id}`,
              {
                id: id,
                thumbNailImage: thumbNailImage,
                coverImage: coverImage,
                libraryName: libraryName,
                title: title,
                author: author,
                translator: translator,
                publisher: publisher,
                barcode: barcode,
                isbn: isbn,
                publishDate: publishDate,
                type: type,
                genre: genre,
                bookStatus: bookStatus,
                category: category,
                contents: contents,
              }
            )
            .then(function (response) {
              console.log(response);
              navigate("/books");
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
                    defaultValue={tfa.value}
                    onChange={onChange}
                  />
                </label>
              ))}
              <label>
                ISBN
                <input
                  type="text"
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
                  defaultinputvalue={type}
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
                  defaultinputvalue={genre}
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
                  defaultinputvalue={bookStatus}
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
                  defaultinputvalue={category}
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
            <button type="submit" className="edit-btn">
              수정
            </button>
            <button type="button" className="delete-btn" onClick={deleteClick}>
              삭제
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BooksEditForm;
