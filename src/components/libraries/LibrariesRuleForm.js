import { useEffect, useState } from "react";
import {
  IoCalendarNumberOutline,
  IoTimeOutline,
  IoLibraryOutline,
} from "react-icons/io5";
import { FaSortNumericUpAlt, FaRegCalendarTimes } from "react-icons/fa";
import { AiOutlineWarning } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";

const LibrariesRuleForm = () => {
  const navigate = useNavigate();
  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;
  const token = json.headers.token;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const [inputs, setInputs] = useState([]);

  const {
    operatingTime,
    holiday,
    lendingAvailableCount,
    lendingAvailableDays,
    lendingLimitDays,
    overdueCount,
    longtermOverdueDays,
  } = inputs;

  useEffect(() => {
    axios
      .get(`/v1/libraries/${storage.libraryId}`, {
        headers: headers,
      })
      .then((response) => setInputs(response.data.data));
  }, []);

  const inputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const LibrariesRuleArray = [
    {
      v: lendingAvailableCount,
      name: "lendingAvailableCount",
      tag: "대출 가능 권수",
      key: "lac",
      icon: <IoLibraryOutline className="icon" />,
    },
    {
      v: lendingAvailableDays,
      name: "lendingAvailableDays",
      tag: "대출 가능 일수",
      key: "lad",
      icon: <IoCalendarNumberOutline className="icon" />,
    },
    {
      v: overdueCount,
      name: "overdueCount",
      tag: "대출 제한 연체 횟수",
      key: "odc",
      icon: <FaSortNumericUpAlt className="icon" />,
    },
    {
      v: longtermOverdueDays,
      name: "longtermOverdueDays",
      tag: "장기 연체 구분 일수",
      key: "ltod",
      icon: <FaRegCalendarTimes className="icon" />,
    },
    {
      v: lendingLimitDays,
      name: "lendingLimitDays",
      tag: "대출 제한 일수",
      key: "lld",
      icon: <AiOutlineWarning className="icon" />,
    },
  ];

  return (
    <div id="libraries-rule">
      <Header />
      <h1 className="libraries-text">도서관 이용 규정 </h1>
      <form
        className="form-box"
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .put(`/v1/libraries/${storage.libraryId}`, {
              id: storage.libraryId,
              address: inputs.address,
              email: inputs.email,
              holiday: holiday,
              name: inputs.name,
              tel: inputs.tel,
              operatingTime: operatingTime,
              lendingAvailableCount: lendingAvailableCount,
              lendingAvailableDays: lendingAvailableDays,
              lendingLimitDays: lendingLimitDays,
              overdueCount: overdueCount,
              longtermOverdueDays: longtermOverdueDays,
            })
            .then(function (result) {
              console.log(result);
              alert("이용 규정이 수정되었습니다.");
              navigate(-1);
            });
        }}
      >
        <label className="label">
          <IoTimeOutline className="icon" />
          <span className="otcls">운영시간</span>
          <input
            type="text"
            className="ot"
            name="operatingTime"
            defaultValue={operatingTime}
            onChange={inputChange}
          />
        </label>
        <label className="label">
          <AiOutlineWarning className="icon" />
          <span className="hdcls">휴관일</span>
          <input
            type="text"
            name="holiday"
            className="hd"
            defaultValue={holiday}
            onChange={inputChange}
          ></input>
        </label>
        {LibrariesRuleArray.map((lra) => (
          <label key={lra.key} className="label">
            {lra.icon}
            <span className={`${lra.key}cls`}>{lra.tag}</span>
            <input
              type="number"
              min={0}
              className={lra.key}
              name={lra.name}
              defaultValue={lra.v}
              onChange={inputChange}
            />
          </label>
        ))}
        <button type="submit" className="save-btn">
          저장
        </button>
      </form>
    </div>
  );
};

export default LibrariesRuleForm;
