import Profile from "../../container/auth/Profile";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div id="profile">
      {localStorage.getItem("user") === null ? (
        <Link to={"/"}>로그인 하기</Link>
      ) : (
        <Profile />
      )}
    </div>
  );
};

export default ProfilePage;
