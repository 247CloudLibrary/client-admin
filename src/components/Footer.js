import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="fotter-home">
        <span className="email">
          <IoMdMail className="icon" />
          sesac@sba.seoul.kr
        </span>
        <span className="location">
          <IoLocationSharp className="icon" />
          서울특별시 금천구 가산로 70
        </span>

        <hr />
        <span className="copyright">Copyright &copy; 24/7 CloudLibrary</span>
      </div>
    </footer>
  );
};

export default Footer;
