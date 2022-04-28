import { useNavigate } from "react-router-dom";

const LendingListItem = ({
  uid,
  thumbnailImage,
  lendingId,
  bookId,
  title,
  libraryName,
  barcode,
  lendingStatus,
  lendingDateTime,
  returnDateTime,
}) => {
  const navigate = useNavigate();

  const handlePath = () => {
    navigate(`/lending/detail/${bookId}`, {
      state: { bookId: bookId },
    });
  };

  return (
    <div className="lening-items" onClick={handlePath}>
      <div className="thumbnailImage">{thumbnailImage}</div>
      <div className="bookData">
        <span>책 제목: {title}</span>
        <span>도서관: {libraryName}</span>
        <span>빌린이: {uid}</span>
        <span>청구기호: {barcode}</span>
        <span>대출일: {lendingDateTime}</span>
        <span>반납예정일: {returnDateTime}</span>
      </div>
      <div className="bookStatusBar">
        <span id={lendingStatus}>상태: {lendingStatus}</span>
        <span>연체 일수: </span>
        <span>연체 일수: 어떻게하징 </span>
      </div>
    </div>
  );
};

export default LendingListItem;
