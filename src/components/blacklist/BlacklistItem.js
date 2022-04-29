import axios from "axios";

const BlacklistItem = ({ uid, libraryName }) => {
  console.log(uid);

  const onClick = (e) => {
    e.preventDefault();

    if (window.confirm("등록을 해제하시겠습니까?") === false) {
      return;
    } else {
      axios
        .delete(`https://www.cloudlibrary.shop/v1/lending/blacklist?uid=${uid}`)
        .then((response) => {
          console.log(response);
        });
    }
  };

  return (
    <div className="blacklist-items">
      <div className="blacklistData">
        <span className="uid"> 제재 회원: {uid}</span>
        <span className="libraryName"> 제재 도서관: {libraryName}</span>
      </div>
      <div className="btn">
        <button className="button" type="submit" onClick={onClick}>
          등록 해제
        </button>
      </div>
    </div>
  );
};

export default BlacklistItem;
