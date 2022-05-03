import { Link } from "react-router-dom";
import { WiCloud } from "react-icons/wi";
import { IoMdCall, IoIosMail, IoMdBusiness, IoIosPin } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";

const ProfileForm = () => {
  const json = JSON.parse(localStorage.getItem("user"));
  const storage = json.data;
  const [toggle, setToggle] = useState(true);
  const [profile, setProfile] = useState();
  const [list, setList] = useState({ ...profile });
  const [loading, setLoading] = useState(false);

  const uid = storage.adminId;
  const token = json.headers.token;

  const getProfile = async (uid, token) => {
    const json = await (
      await fetch(`/v1/admin/${uid}`, {
        headers: { Authorization: "Bearer " + token },
      })
    ).json();
    setProfile(json.data);
    setLoading(true);
  };
  const patchProfile = async (list, token) => {
    await axios.patch(`/v1/admin/update-state`, list, {
      headers: { Authorization: "Bearer " + token },
    });
  };

  const editProfile = async () => {
    await getProfile(uid, token);
    setToggle((toggle) => !toggle);
  };

  const handleEdit = (event) => {
    const { name, value } = event.target;
    const list = { ...profile };
    list[name] = value;
    setList(list);
  };

  useEffect(() => {
    getProfile(uid, token);
  }, []);

  const handleConfirm = async (event) => {
    event.preventDefault();
    if (toggle === true) {
      if (window.confirm("수정하시겠습니까?")) {
        await editProfile();
      } else {
        return;
      }
    } else {
      if (window.confirm("등록하시겠습니까?")) {
        await patchProfile(list, token);
        await editProfile();
      } else {
        return;
      }
    }
  };
  return (
    <div className="profile">
      <Link to={"/home"} className="logo">
        <WiCloud />
        <span className="title">Cloud Library</span>
      </Link>
      {loading ? (
        <form>
          <div className="profile-form">
            <div>
              <BsPersonFill />
              <input
                name="adminName"
                type="text"
                disabled={toggle}
                value={toggle ? profile.adminName : list.adminName}
                onChange={handleEdit}
                required
              />
            </div>
            <div>
              <IoMdBusiness />
              <input
                name="libraryName"
                type="text"
                disabled={toggle}
                value={toggle ? profile.libraryName : list.libraryName}
                onChange={handleEdit}
                required
              />
            </div>
            <div>
              <IoIosPin />
              <input
                name="address"
                type="text"
                disabled={toggle}
                value={toggle ? profile.address : list.address}
                onChange={handleEdit}
                required
              />
            </div>
            <div>
              <IoIosMail />
              <input
                name="email"
                type="text"
                disabled={toggle}
                value={toggle ? profile.email : list.email}
                onChange={handleEdit}
                required
              />
            </div>
            <div>
              <IoMdCall />
              <input
                name="tel"
                type="text"
                disabled={toggle}
                value={toggle ? profile.tel : list.tel}
                onChange={handleEdit}
                required
              />
            </div>
            <div className="editBtn">
              {toggle ? (
                <button onClick={handleConfirm}>
                  <FiEdit />
                  <span>Edit</span>
                </button>
              ) : (
                <button onClick={handleConfirm}>
                  <FiEdit />
                  <span>Done</span>
                </button>
              )}
            </div>
          </div>
        </form>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default ProfileForm;
