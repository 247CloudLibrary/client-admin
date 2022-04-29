import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrBook } from "react-icons/gr";

const LENDINGSTATUS_DATA = [
  { value: "OVERDUE", tag: "연체중" },
  { value: "OUT", tag: "대출중" },
  { value: "LOSS", tag: "분실" },
  { value: "RETURN", tag: "대출 가능" },
];

const LendingListItem = ({
  uid,
  thumbNailImage,
  lendingId,
  bookId,
  title,
  libraryId,
  libraryName,
  barcode,
  lendingStatus,
  lendingDateTime,
  returnDateTime,
}) => {
  const navigate = useNavigate();

  const [lendingStatusValue, setLendingStatusValue] = useState();
  const [returnDateValue, setReturnDateValue] = useState();

  useEffect(() => {
    const lendingFilted = lendingStatus
      ? LENDINGSTATUS_DATA.filter((i) => i.value === lendingStatus)[0].tag
      : lendingStatus;
    setLendingStatusValue(lendingFilted);
  }, []);

  useEffect(() => {
    const returnDateFilted =
      returnDateTime !== "" ? `반납예정일+ ${returnDateTime}` : "";

    setReturnDateValue(returnDateFilted);
  }, []);

  const handlePath = () => {
    navigate(`/lending/detail/${bookId}`, {
      state: { bookId: bookId },
    });
  };

  return (
    <div className="lending-items" key={lendingId} onClick={handlePath}>
      <div className="image-area">
        <img src={thumbNailImage} alt={title} className="thumbNailImage" />
      </div>
      <div className="lendingWrap">
        <div className="lendingTitle">{title}</div>
        <div className="lendingUser">
          <span className="uid">빌린이: {uid}</span>
          <span className="lendingDateTime">대출일: {lendingDateTime}</span>
        </div>
        <div className="lendingData">
          <span className="barcode">청구기호: {barcode}</span>
          <span id={libraryId} className="libraryName">
            도서관: {libraryName}
          </span>
        </div>
        <div className="lendingStatusBar">
          <span className="lendingStatus">대출 상태: {lendingStatusValue}</span>
          <span className="lendingReturn">
            <GrBook /> {returnDateValue}
          </span>
        </div>
      </div>
    </div>
  );
};
export default LendingListItem;
