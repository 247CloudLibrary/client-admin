const BlacklistItem = ({ uid, libraryName }) => {
  return (
    <div className="blacklist-items">
      <div className="blacklistData">
        <span> 제재 회원: {uid}</span>
        <span> 제재 도서관: {libraryName}</span>
      </div>
    </div>
  );
};

export default BlacklistItem;
