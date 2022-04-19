import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";
import { IoMdCall, IoIosMail, IoMdBusiness, IoIosPin } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

const ProfileForm = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = (event) => {
    event.preventDefault();
    setToggle((toggle) => !toggle);
  };
  return (
    <div className="profile">
      <Link to={"/home"} className="logo">
        <WiCloud />
        <span className="title">Cloud Library</span>
      </Link>
      <form>
        <div className="profile-form">
          <div>
            <BsPersonFill />
            <input name="adminName" type="text" disabled={toggle} />
          </div>
          <div>
            <IoMdBusiness />
            <input name="libraryName" type="text" disabled={toggle} />
          </div>
          <div>
            <IoIosPin />
            <input name="address" type="text" disabled={toggle} />
          </div>
          <div>
            <IoIosMail />
            <input name="email" type="text" disabled={toggle} />
          </div>
          <div>
            <IoMdCall />
            <input name="tel" type="text" disabled={toggle} />
          </div>
          <div className="editBtn">
            {toggle ? (
              <button onClick={handleClick}>
                <FiEdit />
                <span>Edit</span>
              </button>
            ) : (
              <button onClick={handleClick}>
                <FiEdit />
                <span>Done</span>
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
