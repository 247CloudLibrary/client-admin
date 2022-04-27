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

  console.log(inputs);
  console.log(num);
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

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(
              "https://www.cloudlibrary.shop/v1/libraries",
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
              navigate("/libraries/list");
              console.log(response);
              alert("도서관이 등록되었습니다.");
            });
        }}
      >
        <input
          type="text"
          defalutvalue={name}
          name="name"
          placeholder="도서관 이름"
          onChange={onChange}
        />
        <input
          type="text"
          defalutvalue={address}
          name="address"
          placeholder="도서관 주소"
          onChange={onChange}
        />
        <input
          type="email"
          defalutvalue={email}
          name="email"
          placeholder="도서관 이메일"
          onChange={onChange}
        />
        <input
          type="tel"
          defalutvalue={tel}
          name="tel"
          placeholder="전화번호"
          pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}"
          onChange={onChange}
        />
        <input
          type="text"
          defalutvalue={holiday}
          name="holiday"
          placeholder="휴관일"
          onChange={onChange}
        />
        <input
          type="text"
          defalutvalue={operatingTime}
          name="operatingTime"
          placeholder="운영시간"
          onChange={onChange}
        />
        <input
          type="number"
          defalutvalue={lendingAvailableCount}
          name="lendingAvailableCount"
          placeholder="대출 가능 권수"
          onChange={onNumChange}
        />
        <input
          type="number"
          defalutvalue={lendingAvailableDays}
          name="lendingAvailableDays"
          placeholder="대출 가능 일수"
          onChange={onNumChange}
        />
        <input
          type="number"
          defalutvalue={overdueCount}
          name="overdueCount"
          placeholder="대출 제한 연체 횟수"
          onChange={onNumChange}
        />
        <input
          type="number"
          defalutvalue={longtermOverdueDays}
          name="longtermOverdueDays"
          placeholder="장기 연체 구분 일수"
          onChange={onNumChange}
        />
        <input
          type="number"
          defalutvalue={lendingLimitDays}
          name="lendingLimitDays"
          placeholder="대출 제한 일수"
          onChange={onNumChange}
        />
        <div>
          <button type="submit">등록</button>
        </div>
      </form>
    </div>
  );
};
export default LibrariesWrite;
