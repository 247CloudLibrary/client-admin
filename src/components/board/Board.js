import { Navigate, useNavigate } from "react-router-dom";
import { BsMegaphone, BsInfoCircle } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import Footer from "../Footer";

const Board = () => {
  const navigate = useNavigate();

  const toLibNotice = () => {
    navigate("/boards/list");
  };
  const toNotice = () => {
    navigate("/notices");
  };
  const toGuide = () => {
    navigate("/guide");
  };

  return (
    <div id="Board">
      <div className="btn">
        <div onClick={toLibNotice}>
          <IoLibraryOutline className="icon" />
          <span className="tag">도서관 공지사항</span>
        </div>
        <div onClick={toNotice}>
          <BsMegaphone className="icon" />
          <span className="tag">통합 공지사항</span>
        </div>
        <div onClick={toGuide}>
          <BsInfoCircle className="icon" />
          <span className="tag">통합 이용안내</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Board;
