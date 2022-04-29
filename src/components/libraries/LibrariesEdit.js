import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LibrariesEdit = () => {
  const [edit, setEdit] = useState([]);
  const [num, setNum] = useState([]);
  const location = useLocation();
  const id = location.state.id;
  const navigate = useNavigate();

  const { name, address, holiday, operatingTime, email, tel } = edit;
  const {
    lendingAvailableCount,
    lendingAvailableDays,
    overdueCount,
    longtermOverdueDays,
    lendingLimitDays,
  } = num;

  const onChange = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const onNumChange = (e) => {
    setNum({
      ...num,
      [e.target.name]: e.target.valueAsNumber,
    });
  };

  useEffect(() => {
    axios
      .get(`https://www.cloudlibrary.shop/v1/libraries/${id}`)
      .then(function (response) {
        setEdit(response.data.data);
        setNum(response.data.data);
      });
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("정말 삭제하시겠습니까?") === false) {
      return;
    } else {
      axios
        .delete(
          `http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/libraries/${id}`
        )
        .then((response) => {
          console.log(response);
          alert("도서관이 삭제되었습니다.");
          navigate("/libraries/list");
        });
    }
  };

  const LibrariesEditArray = [
    { val: name, key: "name", tag: "도서관 이름" },
    { val: address, key: "address", tag: "도서관 주소" },
    { val: holiday, key: "holiday", tag: "휴관일" },
    { val: operatingTime, key: "operatingTime", tag: "운영시간" },
    { val: edit.createdAt, key: "createdAt", tag: "등록일" },
    { val: edit.updatedAt, key: "updatedAt", tag: "수정일" },
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
    <div id="libraries-edit">
      <div className="edit-contents">
        <h1 className="library-name">{edit.name}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .put(
                `http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/libraries/${id}`,
                {
                  id: id,
                  name: name,
                  address: address,
                  email: email,
                  tel: tel,
                  holiday: holiday,
                  operatingTime: operatingTime,
                  lendingAvailableCount: lendingAvailableCount,
                  lendingAvailableDays: lendingAvailableDays,
                  overdueCount: overdueCount,
                  longtermOverdueDays: longtermOverdueDays,
                  lendingLimitDays: lendingLimitDays,
                }
              )
              .then(function (response) {
                console.log(response);
                navigate("/libraries/list");
              });
          }}
        >
          <div className="edit-form">
            {LibrariesEditArray.map((lda, index) => (
              <div key={lda.key}>
                <label name={lda.key} className="input-box">
                  {`${lda.tag}  `}
                  <input
                    className={lda.key}
                    type="text"
                    defaultValue={lda.val}
                    name={lda.key}
                    onChange={onChange}
                    disabled={index === 4 || index === 5}
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
                />
              </label>
            </div>
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
          <div className="edit-btn">
            <button className="edit-btn" type="submit">
              수정
            </button>
            <button className="delete-btn" type="button" onClick={handleDelete}>
              삭제
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LibrariesEdit;
