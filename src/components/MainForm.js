import { FaUser } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
import { BsJournalText, BsJournalCheck } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoSearch, IoBanOutline, IoFileTrayFullOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { WiCloud } from "react-icons/wi";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const MainForm = ({ props }) => {
  return (
    <>
      <div className="main">
        <div className="header">
          <Link to="/home" className="logo">
            <WiCloud />
            <span>Cloud Library</span>
            <button onClick={props.onLogout} className="logout">
              <RiLogoutBoxRLine />
            </button>
          </Link>
        </div>
        <div className="feature-box">
          <div className="feature">
            <div onClick={props.onBoards}>
              <HiOutlineSpeakerphone className="icon" />
              <span className="text">공지사항 관리</span>
            </div>
            <div onClick={props.onBooks}>
              <IoFileTrayFullOutline className="icon" />
              <span className="text">도서 관리</span>
            </div>
            <div onClick={props.onLending}>
              <BsJournalCheck className="icon" />
              <span className="text">대출 관리</span>
            </div>
          </div>

          <div className="feature">
            <div onClick={props.onProfile}>
              <FaUser className="icon" />
              <span className="text">마이 페이지</span>
            </div>
            <div onClick={props.onBlackList}>
              <IoBanOutline className="icon" />
              <span className="text">블랙리스트</span>
            </div>
            <div onClick={props.onRules}>
              <BsJournalText className="icon" />
              <span className="text">이용 규정 관리</span>
            </div>
          </div>
          <div className="feature">
            <div onClick={props.onSearchUser}>
              <IoSearch className="icon" />
              <span className="text">회원 조회</span>
            </div>
            <div onClick={props.onLibraryList}>
              <ImLibrary className="icon" />
              <span className="text">도서관 목록</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainForm;
