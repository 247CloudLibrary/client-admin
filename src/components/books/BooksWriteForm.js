import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../common/Header";
import ImgUpload from "./ImgUpload";
import AWS from "aws-sdk";

const BooksWriteForm = () => {
  const [thumbNailImage, setThumbnailImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [loaded1, setLoaded1] = useState(false);
  const [fileURL1, setFileURL1] = useState("");
  const [loaded2, setLoaded2] = useState(false);
  const [fileURL2, setFileURL2] = useState("");

  const navigate = useNavigate();

  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;
  const token = json.headers.token;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const [inputs, setInputs] = useState({
    libraryName: storage.libraryName,
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
        Bucket: "cloudlibrary-bookimage",
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
        Bucket: process.env.REACT_APP_S3_BUCKET,
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

  // const thumbNail = thumbNailImage.replace(/(.jpg|.jpeg)$/, "");
  // const cover = coverImage.replace(/(.jpg|.jpeg)$/, "");

  const TextFormArray = [
    { value: libraryName, name: "libraryName", label: "도서관 이름" },
    { value: title, name: "title", label: "책 제목" },
    { value: author, name: "author", label: "저자" },
    { value: translator, name: "translator", label: "옮긴이" },
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

  return (
    <div id="BookWriteForm">
      <Header />
      <div className="form-area">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post(
                "/v1/books",

                {
                  libraryName: libraryName,
                  libraryId: storage.libraryId,
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
                },
                { headers: headers }
              )
              .then(function (response) {
                console.log(response);
                alert("도서가 등록되었습니다.");
                navigate(-1);
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
                        value={tfa.value}
                        onChange={onChange}
                        disabled={index === 0}
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
            </div>
            <div className="btn-box">
              <button type="submit" className="edit-btn">
                등록
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BooksWriteForm;
