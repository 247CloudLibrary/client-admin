import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LibrariesDetail = () => {
  const [detail, setDetail] = useState([]);
  const location = useLocation();
  console.log("state", location.state);
  const id = location.state.id;
  const navigate = useNavigate();

  const { name, address, holiday, operatingTime, email, tel } = detail;

  const onChange = (e) => {
    setDetail({
      ...detail,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    axios
      .get(
        `http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/libraries/${id}`
      )
      .then(function (response) {
        setDetail(response.data.data);
        console.log(response);
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

  const LibrariesDetailArray = [
    { val: name, key: "name", tag: "도서관 이름" },
    { val: address, key: "address", tag: "도서관 주소" },
    { val: detail.createdAt, key: "createdAt", tag: "등록일" },
    { val: detail.updatedAt, key: "updatedAt", tag: "수정일" },
  ];

  return (
    <div id="libraries-detail">
      <div className="detail-contents">
        <h1 className="library-name">{detail.name}</h1>
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
                }
              )
              .then(function (response) {
                console.log(response);
                navigate("/libraries/list");
              });
          }}
        >
          <div className="detail-form">
            {LibrariesDetailArray.map((lda, index) => (
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
          </div>
          <div className="detail-btn">
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

export default LibrariesDetail;
