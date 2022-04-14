const LendingListItem = ({
  uid,
  thumnailImage,
  bookId,
  title,
  libraryName,
  barcode,
  lendingStatus,
  lendingDateTime,
  returnDateTime,
}) => {
  return (
    <div className="lening-items">
      <input type="checkbox" value={bookId} />
      <div className="thumnailImage">{thumnailImage}</div>
      <div className="bookData">
        <span>책 제목: {title}</span>
        <span>도서관: {libraryName}</span>
        <span>빌린이: {uid}</span>
        <span>청구기호: {barcode}</span>
        <span>대출일: {lendingDateTime}</span>
        <span>반납예정일: {returnDateTime}</span>
      </div>
      <div className="bookStatusBar">
        <span>상태: {lendingStatus}</span>
        <span>연체 일수: </span>
      </div>
    </div>
  );
};

export default LendingListItem;
