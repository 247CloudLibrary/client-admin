import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LibrariesDetail = () => {
  const [libraryData, setLibraryData] = useState([]);
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    axios
      .get(
        `http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/libraries/${id}`
      )
      .then(function (response) {
        setLibraryData(response.data.data);
        console.log(response.data.data);
      });
  }, []);

  const LibraryDetailArray = [
    { value: libraryData.address, key: "address", tag: "주소" },
    { value: libraryData.tel, key: "tel", tag: "TEL" },
    { value: libraryData.email, key: "email", tag: "이메일" },
    { value: libraryData.holiday, key: "holiday", tag: "휴관일" },
    { value: libraryData.operatingTime, key: "operatingTime", tag: "운영시간" },
    {
      value: libraryData.lendingAvailableCount,
      key: "lendingAvailableCount",
      tag: "대출 가능 권수",
    },
    {
      value: libraryData.lendingAvailableDays,
      key: "lendingAvailableDays",
      tag: "대출 가능 일수",
    },
    {
      value: libraryData.overdueCount,
      key: "overdueCount",
      tag: "대출 제한 연체 횟수",
    },
    {
      value: libraryData.longtermOverdueDays,
      key: "longtermOverdueDays",
      tag: "장기 연체 구분 일수",
    },
    {
      value: libraryData.lendingLimitDays,
      key: "lendingLimitDays",
      tag: "대출 제한 일수",
    },
  ];

  const navigate = useNavigate();
  const toEdit = () => {
    navigate(`/libraries/edit/${id}`, {
      state: {
        id: id,
      },
    });
  };

  return (
    <div id="libraries-detail">
      <div>도서관 상세 (슈퍼어드민)</div>
      <div className="info-area">
        <div className="library-name">{libraryData.name}</div>
        <table className="detail-area">
          {LibraryDetailArray.map((lda) => (
            <thead key={lda.key}>
              <tr className="detail-text">
                <td className="tag">{lda.tag}</td>
                <td className="value">{lda.value}</td>
              </tr>
            </thead>
          ))}
        </table>
      </div>
      <div className="btn-area">
        <Link to="/libraries/list">
          <button className="list-btn">목록으로</button>
        </Link>
        <button className="edit-btn" onClick={toEdit}>
          수정하기
        </button>
      </div>
    </div>
  );
};
export default LibrariesDetail;
