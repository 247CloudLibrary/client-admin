import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  IoLibraryOutline,
  IoCalendarNumberOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { FaSortNumericUpAlt, FaRegCalendarTimes } from "react-icons/fa";
import { AiOutlineWarning } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiZzzLine } from "react-icons/ri";
import { MdOutlineCreate, MdUpdate } from "react-icons/md";

const LibrariesDetail = () => {
  const [libraryData, setLibraryData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id;

  useEffect(() => {
    axios
      .get(`https://www.cloudlibrary.shop/v1/libraries/${id}`)
      .then(function (response) {
        setLibraryData(response.data.data);
      });
  }, []);

  const LibraryDetailArray = [
    {
      value: libraryData.address,
      key: "address",
      tag: "주소",
      icon: <GrMapLocation />,
    },
    { value: libraryData.tel, key: "tel", tag: "TEL", icon: <BsTelephone /> },
    {
      value: libraryData.email,
      key: "email",
      tag: "이메일",
      icon: <HiOutlineMail />,
    },
    {
      value: libraryData.holiday,
      key: "holiday",
      tag: "휴관일",
      icon: <RiZzzLine />,
    },
    {
      value: libraryData.operatingTime,
      key: "operatingTime",
      tag: "운영시간",
      icon: <IoTimeOutline />,
    },
    {
      value: libraryData.createdAt,
      key: "createdAt",
      tag: "등록일",
      icon: <MdOutlineCreate />,
    },
    {
      value: libraryData.updatedAt,
      key: "updatedAt",
      tag: "수정일",
      icon: <MdUpdate />,
    },
  ];
  const toEdit = () => {
    navigate(`/libraries/edit/${id}`, {
      state: {
        id: id,
      },
    });
  };

  return (
    <div id="libraries-detail">
      <div className="header"></div>
      <div className="library-name">{`${libraryData.name}(ID: ${id})`}</div>
      <div className="info-area">
        <div className="detail-info">도서관 정보</div>
        <table className="detail-area">
          {LibraryDetailArray.map((lda) => (
            <thead className="detail-box" key={lda.key}>
              <tr className="detail-text">
                <td className="td-icon"> {lda.icon}</td>
                <td className="tag">{lda.tag}</td>
                <td className={lda.key}>{lda.value}</td>
              </tr>
            </thead>
          ))}
        </table>
      </div>
      <div className="rule-area">
        <div className="detail-info">이용규정</div>
        <div className="up-rule">
          <div className="library-rule">
            <div className="icon-num">
              <IoLibraryOutline className="icon" />
              <span className="text">{libraryData.lendingAvailableCount}</span>
            </div>
            <span className="label">대출 가능 권수</span>
          </div>
          <div className="library-rule">
            <div className="icon-num">
              <IoCalendarNumberOutline className="icon" />
              <span className="text">{libraryData.lendingAvailableDays}</span>
            </div>
            <span className="label">대출 가능 일수</span>
          </div>
        </div>
        <div className="down-rule">
          <div className="library-rule">
            <div className="icon-num">
              <FaSortNumericUpAlt className="icon" />
              <span className="text">{libraryData.overdueCount}</span>
            </div>
            <span className="label">대출 제한 연체 횟수</span>
          </div>
          <div className="library-rule">
            <div className="icon-num">
              <FaRegCalendarTimes className="icon" />
              <span className="text">{libraryData.longtermOverdueDays}</span>
            </div>
            <span className="label">장기 연체 구분 일수</span>
          </div>
          <div className="library-rule">
            <div className="icon-num">
              <AiOutlineWarning className="icon" />
              <span className="text">{libraryData.lendingLimitDays}</span>
            </div>
            <span className="label">대출 제한 일수</span>
          </div>
        </div>
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
