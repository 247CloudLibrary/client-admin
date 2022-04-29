import { useState } from "react";
import { RiZzzLine } from "react-icons/ri";
import {
  IoCalendarNumberOutline,
  IoTimeOutline,
  IoLibraryOutline,
} from "react-icons/io5";
import { FaSortNumericUpAlt, FaRegCalendarTimes } from "react-icons/fa";
import { AiOutlineWarning } from "react-icons/ai";

const LibrariesRuleForm = () => {
  const [inputs, setInputs] = useState({
    operatingTime: "09:00 - 22:00",
    holiday: "월",
    lendingAvailableCount: 1,
    lendingAvailableDays: 1,
    lendingLimitDays: 1,
    overdueCount: 1,
    longtermOverdueDays: 1,
  });
  const {
    operatingTime,
    holiday,
    lendingAvailableCount,
    lendingAvailableDays,
    lendingLimitDays,
    overdueCount,
    longtermOverdueDays,
  } = inputs;

  const inputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const holidayArray = [
    { day: "월" },
    { day: "화" },
    { day: "수" },
    { day: "목" },
    { day: "금" },
    { day: "토" },
    { day: "일" },
  ];

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
      <h1 className="libraries-text">도서관 이용 규정 </h1>
      <form className="form-box">
        <label className="label">
          <AiOutlineWarning className="icon" />
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
          <select
            id="holiday"
            name="holiday"
            className="hd"
            defaultValue={holiday}
            defaultinputvalue={holiday}
            onChange={inputChange}
          >
            {holidayArray.map((ha) => (
              <option value={ha.day} key={ha.day}>
                {ha.day}
              </option>
            ))}
          </select>
        </label>
        {LibrariesRuleArray.map((lra) => (
          <label key={lra.key} className="label">
            {lra.icon}
            <span className={`${lra.key}cls`}>{lra.tag}</span>
            <input
              type="number"
              min={0}
              className={lra.key}
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
