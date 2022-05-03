import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const mergeArrayObjects = (arr1, arr2) => {
  let merge = [];
  for (let i = 0; i < arr1.length; i++) {
    merge.push({
      ...arr1[i],
      ...arr2.find((d) => d.id === arr1[i].bookId),
    });
  }
  return merge;
};

const LendingDetail = () => {
  const [lendingData, setLendingData] = useState([]);
  const location = useLocation();
  const bookId = location.state.bookId;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .all([
        axios.get("https://www.cloudlibrary.shop/v1/lending"),
        axios.get(`https://www.cloudlibrary.shop/v1/books`),
      ])
      .then((result) => {
        const resultArray = mergeArrayObjects(
          result[0].data.data,
          result[1].data.data
        );
        setLendingData(resultArray.filter((e) => e.bookId === bookId)[0]);
      });
  }, []);

  const LendingDetailArray = [
    { value: lendingData.author, key: "author", tag: "저자" },
    { value: lendingData.translator, key: "translator", tag: "역자" },
    { value: lendingData.genre, key: "genre", tag: "장르" },
    {
      value: lendingData.category,
      key: "category",
      tag: "카테고리",
    },
    {
      value: lendingData.uid,
      key: "uid",
      tag: "빌린이",
    },
    { value: lendingData.isbn, key: "isbn", tag: "ISBN" },
    { value: lendingData.publisher, key: "publisher", tag: "출판사" },
    { value: lendingData.publishDate, key: "publishDate", tag: "출판일" },
    { value: lendingData.barcode, key: "barcode", tag: "청구기호" },
    { value: lendingData.libraryName, key: "libraryName", tag: "도서관" },
    { value: lendingData.rfid, key: "rfid", tag: "rfid" },
    {
      value:
        lendingData.lendingStatus === "OUT"
          ? "대출중"
          : lendingData.lendingStatus === "OVERDUE"
          ? "연체중"
          : "대출가능",
      key: "lendingStatus",
      tag: "대출 상태",
    },
    {
      value: lendingData.returnTime !== "" ? lendingData.returnDateTime : "",
      key: "returnDateTime",
      tag: "반납예정일",
    },
  ];

  const createLendingClick = (e) => {
    e.preventDefault();
    if (lendingData.lendingStatus === "OUT") {
      window.alert("이미 대출된 도서입니다.");
    } else if (window.confirm("대출 하시겠습니까?")) {
      const lendingUid = Number(window.prompt("회원 번호를 입력하세요"));
      axios
        .post(`https://www.cloudlibrary.shop/v1/lending`, {
          lendingId: lendingData.lendingId,
          bookId: lendingData.bookId,
          uid: lendingUid,
          libraryId: lendingData.libraryId,
          libraryName: lendingData.libraryName,
          lendingStatus: "OUT",
          barcode: lendingData.barcode,
          rfid: lendingData.rfid,
        })
        .then(() => {
          alert("대출이 완료되었습니다.");
        });
      navigate(`/lending`);
    } else {
      return;
    }
  };

  const createRentalClick = (e) => {
    e.preventDefault();
    if (window.confirm("반납 하시겠습니까?")) {
      axios
        .patch(
          `https://www.cloudlibrary.shop/v1/lending?lendingId=${lendingData.lendingId}&lendingStatus=RETURN`,
          {
            lendingId: lendingData.lendingId,
            bookId: lendingData.bookId,
            uid: lendingData.uid,
            libraryId: lendingData.libraryId,
            libraryName: lendingData.libraryName,
            lendingStatus: "RETURN",
            barcode: lendingData.barcode,
            rfid: lendingData.rfid,
          }
        )
        .then(() => {
          alert("반납이 완료되었습니다.");
          lendingData.lendingUid = "";
        });
      navigate(`/lending`);
    } else {
      return;
    }
  };

  const updateBlacklistClick = (e) => {
    e.preventDefault();

    if (window.confirm("등록 하시겠습니까?")) {
      axios
        .put(`https://www.cloudlibrary.shop/v1/lending/blacklist`, {
          uid: lendingData.uid,
          libraryId: lendingData.libraryId,
          libraryName: lendingData.libraryName,
        })
        .then(() => {
          alert("등록이 완료되었습니다.");
        });
      navigate(`/lending`);
    } else {
      return;
    }
  };

  return (
    <div id="lending-detail">
      <div className="btns">
        <button className="btn" onClick={createLendingClick} type="click">
          대출
        </button>
        <button className="btn" onClick={createRentalClick} type="submit">
          반납
        </button>
        <button className="btn" onClick={updateBlacklistClick} type="submit">
          블랙리스트 등록
        </button>
      </div>
      <div className="detail-box">
        <div className="title-area">
          <div className="title-box">
            <span className="type">{lendingData.bookType}</span>
            <span className="title">{lendingData.title}</span>
          </div>
        </div>
        <div className="info-area">
          <div className="info-box">
            <div className="image-box">
              <img className="coverImage" src={lendingData.coverImage} alt="" />
            </div>
            <table className="text-box">
              {LendingDetailArray.map((data, index) => (
                <thead className="label" key={index}>
                  <tr>
                    <td className="label-tag">{data.tag}</td>
                    <td className="label-value">{data.value}</td>
                  </tr>
                </thead>
              ))}
            </table>
          </div>
        </div>
        <div className="minititle-box">
          <div className="minititle">상세정보</div>
        </div>
        <div className="contents-area">
          <div className="contents-box">
            <p>{lendingData.contents}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LendingDetail;
