import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LibrariesWrite = () => {
  const [inputs, setInputs] = useState({
    address: "",
    email: "",
    holiday: "",
    name: "",
    operatingTime: "",
    tel: "",
  });
  const [num, setNum] = useState({
    lendingAvailableCount: 0,
    lendingAvailableDays: 0,
    longtermOverdueDays: 0,
    overdueCount: 0,
    lendingLimitDays: 0,
  });
  const { address, email, holiday, operatingTime, name, tel } = inputs;
  const {
    lendingAvailableCount,
    lendingAvailableDays,
    longtermOverdueDays,
    overdueCount,
    lendingLimitDays,
  } = num;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const onNumChange = (e) => {
    setNum({
      ...num,
      [e.target.name]: e.target.valueAsNumber,
    });
  };

  const navigate = useNavigate();

  const LibrariesWriteArray = [
    { val: name, key: "name", tag: "도서관 이름" },
    { val: address, key: "address", tag: "도서관 주소" },
    { val: operatingTime, key: "operatingTime", tag: "운영시간" },
    { val: operatingTime, key: "holiday", tag: "휴관일" },
  ];

  const LibrariesNumArray = [
    {
      val: lendingAvailableCount,
      key: "lendingAvailableCount",
      tag: "대출 가능 권수",
    },
    {
      val: lendingAvailableDays,
      key: "lendingAvailableDays",
      tag: "대출 가능 일수",
    },
    {
      val: overdueCount,
      key: "overdueCount",
      tag: "대출 제한 연체 횟수",
    },
    {
      val: longtermOverdueDays,
      key: "longtermOverdueDays",
      tag: "장기 연체 구분 일수",
    },
    {
      val: lendingLimitDays,
      key: "lendingLimitDays",
      tag: "대출 제한 일수",
    },
  ];

  return (
    <div id="LibrariesWrite">
      <form
        className="library-write"
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(
              "http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/libraries",
              {
                address: address,
                email: email,
                holiday: holiday,
                lendingAvailableCount: lendingAvailableCount,
                lendingAvailableDays: lendingAvailableDays,
                longtermOverdueDays: longtermOverdueDays,
                name: name,
                operatingTime: operatingTime,
                overdueCount: overdueCount,
                lendingLimitDays: lendingLimitDays,
                tel: tel,
              }
            )
            .then(function (response) {
              console.log(response);
              alert("도서관이 등록되었습니다.");
              navigate("/libraries/list");
            });
        }}
      >
        <div className="write-form">
          <div className="input-area">
            <span className="write-info">도서관 정보</span>
            {LibrariesWriteArray.map((lwa) => (
              <div key={lwa.key}>
                <label name={lwa.key} className="input-box">
                  {lwa.tag}
                  <input
                    className={lwa.key}
                    type="text"
                    name={lwa.key}
                    defaultValue={lwa.val}
                    placeholder={lwa.tag}
                    onChange={onChange}
                  />
                </label>
              </div>
            ))}
            <div>
              <label className="input-box">
                이메일&nbsp;&nbsp;
                <input
                  className="email"
                  type="email"
                  name="email"
                  placeholder="이메일"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  onChange={onChange}
                  defaultValue={email}
                />
              </label>
            </div>

            <div>
              <label className="input-box">
                전화번호&nbsp;&nbsp;
                <input
                  type="tel"
                  className="tel"
                  name="tel"
                  pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}"
                  onChange={onChange}
                  defaultValue={tel}
                  placeholder="전화번호"
                />
              </label>
            </div>
          </div>
          <div className="number-area">
            <span className="write-rule">이용 규정 정보</span>
            {LibrariesNumArray.map((lna) => (
              <div key={lna.key}>
                <label name={lna.key} className="number-box">
                  {`${lna.tag}  `}
                  <input
                    className={lna.key}
                    type="number"
                    defaultValue={lna.val}
                    name={lna.key}
                    min="0"
                    onChange={onNumChange}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="btn">
          <button className="write-btn" type="submit">
            등록
          </button>
        </div>
      </form>
    </div>
  );
};
export default LibrariesWrite;
