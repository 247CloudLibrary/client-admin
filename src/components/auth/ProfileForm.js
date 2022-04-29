import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";
import { IoMdCall, IoIosMail, IoMdBusiness, IoIosPin } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";
import { profile } from "../../modules/auth";

const ProfileForm = () => {
  const [toggle, setToggle] = useState(true);
  const [value, setValue] = useState();
  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;
  const handleClick = (event) => {
    event.preventDefault();
    setToggle((toggle) => !toggle);
  };
  const onChange = (event) => {
    setValue({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };
  console.log(value);
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
            <input
              name="adminName"
              type="text"
              disabled={toggle}
              value={storage.adminName}
            />
          </div>
          <div>
            <IoMdBusiness />
            <input
              name="libraryName"
              type="text"
              disabled={toggle}
              value={storage.libraryName}
            />
          </div>
          <div>
            <IoIosPin />
            <input
              name="address"
              type="text"
              disabled={toggle}
              value={storage.address}
            />
          </div>
          <div>
            <IoIosMail />
            <input
              name="email"
              type="text"
              disabled={toggle}
              value={storage.email}
            />
          </div>
          <div>
            <IoMdCall />
            <input
              name="tel"
              type="text"
              disabled={toggle}
              value={storage.tel}
            />
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
