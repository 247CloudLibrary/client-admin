import { useState, useEffect } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const UserListPage = () => {
  const storage = JSON.parse(localStorage.getItem("user"));
  const token = storage.headers.token;

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserList = async (token) => {
    const json = await (
      await fetch("/v1/admin/auth-view", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
    ).json();
    setList(json.data);
    setLoading(false);
  };

  useEffect(() => {
    getUserList(token);
  }, []);

  const onClick = () => {
    console.log(list);
  };
  return (
    <div id="user-list">
      <Header />
      <div className="user-list">
        <div className="user-list-title">User List</div>
        <div className="user-list-container" id="title">
          <span className="id">아이디</span>
          <span className="name">이름</span>
          <span className="tel">연락처</span>
          <span className="email">이메일</span>
        </div>
        {loading ? (
          <span>Loading</span>
        ) : (
          list.map((data) => (
            <div className="user-list-container" key={data.uid}>
              <span className="id">{data.userId}</span>
              <span className="name">{data.userName}</span>
              <span className="tel">{data.tel}</span>
              <span className="email">{data.email}</span>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UserListPage;
