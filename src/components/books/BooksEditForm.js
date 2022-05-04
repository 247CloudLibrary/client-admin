import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import AWS from "aws-sdk";
import ImgUpload from "./ImgUpload";
import Header from "../common/Header";

const BooksEditForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [thumbNailImage, setThumbnailImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [loaded1, setLoaded1] = useState(false);
  const [fileURL1, setFileURL1] = useState(`${location.state.thumbNailImage}`);
  const [loaded2, setLoaded2] = useState(false);
  const [fileURL2, setFileURL2] = useState(`${location.state.coverImage}`);

  const json = JSON.parse(localStorage.getItem("user"));
  const token = json.headers.token;

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  console.log(fileURL1, fileURL2);
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
    bookType: location.state.bookType,
    genre: location.state.genre,
    barcode: location.state.barcode,
    bookStatus: location.state.bookStatus,
    category: location.state.category,
    rid: location.state.rid,
    rfid: location.state.rfid,
  });

  let {
    libraryName,
    isbn,
    title,
    author,
    translator,
    contents,
    publisher,
    publishDate,
    bookType,
    genre,
    barcode,
    bookStatus,
    category,
    rid,
    rfid,
  } = inputs;

  switch (bookType) {
    case "도서":
      bookType = "BOOK";
      break;
    default:
      bookType = "NON_BOOK";
  }

  switch (genre) {
    case "액션":
      genre = "ACTION";
      break;
    case "SF/판타지":
      genre = "SF_AND_FANTASY";
      break;
    case "코미디":
      genre = "COMEDY";
      break;
    case "로맨스":
      genre = "ROMANCE";
      break;
    case "공포/스릴러":
      genre = "HORROR_AND_THRILLER";
      break;
    default:
      genre = "OTHERS";
  }

  switch (bookStatus) {
    case "대여가능":
      bookStatus = "AVAILABLE";
      break;
    case "창고보관":
      bookStatus = "STORAGE";
      break;
    case "분실":
      bookStatus = "LOST";
      break;
    default:
      bookStatus = "DISCARD";
  }

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_REGION,
  });

  const imageChange1 = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      setLoaded1("loading");
      fileReader.readAsDataURL(file);
    }
    fileReader.onload = () => {
      setFileURL1(fileReader.result);
      setLoaded1(true);
    };
  };
  const imageChange2 = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      setLoaded2("loading");
      fileReader.readAsDataURL(file);
    }
    fileReader.onload = () => {
      setFileURL2(fileReader.result);
      setLoaded2(true);
    };
  };

  const handleImgUpload1 = (e) => {
    const file = e.target.files[0];
    const upload = new AWS.S3.ManagedUpload({
      params: {
        ACL: "public-read",
        Body: file,
        Bucket: process.env.REACT_APP_S3_BUCKET,
        Key: "books/" + file.name,
      },
    });

    const promise = upload.promise();

    promise.then(
      function (data) {
        setThumbnailImage(data.Location);
        console.log(data.Location + "업로드 성공");
      },

      function (err) {
        console.log(err);
        return console.log("오류가 발생했습니다");
      }
    );
  };
  const handleImgUpload2 = (e) => {
    const file = e.target.files[0];
    const upload = new AWS.S3.ManagedUpload({
      params: {
        ACL: "public-read",
        Body: file,
        Bucket: "cloudlibrary-bookimage",
        Key: "menu/" + file.name,
      },
    });

    const promise = upload.promise();

    promise.then(
      function (data) {
        setCoverImage(data.Location);
        console.log(data.Location + "업로드 성공");
      },

      function (err) {
        console.log(err);
        return console.log("오류가 발생했습니다");
      }
    );
  };

  const TextFormArray = [
    { value: libraryName, name: "libraryName", label: "도서관 이름" },
    { value: title, name: "title", label: "책 제목" },
    { value: author, name: "author", label: "저자" },
    { value: translator, name: "translator", label: "옮긴이" },
    { value: publisher, name: "publisher", label: "출판사" },
    { value: barcode, name: "barcode", label: "바코드" },
    { value: rid, name: "rid", label: "rid" },
    { value: rfid, name: "rfid", label: "rfid" },
    { value: isbn, name: "isbn", label: "ISBN" },
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
    { value: "AVAILABLE", label: "대여가능" },
    { value: "STORAGE", label: "창고보관" },
    { value: "LOST", label: "분실" },
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

  const deleteClick = (e) => {
    e.preventDefault();

    if (window.confirm("정말 삭제하시겠습니까?") === false) {
      return;
    } else {
      axios
        .patch(`/v1/books/${id}`, { id: id }, { headers: headers })
        .then(() => {
          alert("도서가 삭제되었습니다.");
        });
    }
  };
  return (
    <div id="BookEditForm">
      <Header />
      <div className="form-area">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            axios
              .put(
                `/v1/books/${id}`,
                {
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
                  bookType: bookType,
                  genre: genre,
                  rid: rid,
                  rfid: rfid,
                  bookStatus: bookStatus,
                  category: category,
                  contents: contents,
                },
                { headers: headers }
              )
              .then(function (response) {
                console.log(response);
                alert("도서 정보가 수정되었습니다.");
                navigate("/books");
              });
          }}
        >
          <div className="input-form">
            <div className="input-area">
              <div className="input-box">
                <div className="image-area">
                  <ImgUpload
                    setState={setInputs}
                    loaded1={loaded1}
                    fileURL1={fileURL1}
                    imageChange1={imageChange1}
                    handleImgUpload1={handleImgUpload1}
                    loaded2={loaded2}
                    fileURL2={fileURL2}
                    imageChange2={imageChange2}
                    handleImgUpload2={handleImgUpload2}
                  />
                </div>
              </div>
              <div className="text">
                <div className="text-form">
                  {TextFormArray.map((tfa, index) => (
                    <label key={tfa.name}>
                      {tfa.label}
                      <input
                        type="text"
                        name={tfa.name}
                        className={tfa.name}
                        defaultValue={tfa.value}
                        onChange={onChange}
                        disabled={index === 0 || index === 6}
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
                      defaultValue={bookType}
                      defaultinputvalue={bookType}
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
            </div>
            <div className="btn-box">
              <button type="submit" className="edit-btn">
                수정
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={deleteClick}
              >
                삭제
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BooksEditForm;
