import { useState } from "react";
import LendingListForm from "../components/lending/LendingListForm";
import LendingStatusFilter from "../components/lending/LendingStatusFilter";

const STATUS_DATA = [
  { id: "", value: "대출 상태 조회" },
  { id: "RETURN", value: "대출 가능" },
  { id: "OUT", value: "대출 중" },
  { id: "OVERDUE", value: "연체 중" },
  { id: "LOSS", value: "분실" },
];

const LendingPage = () => {
  const [dropValue, setDropValue] = useState("대출 상태 조회");

  const onSelect = (e) => {
    const { value } = e.target;
    setDropValue(STATUS_DATA.filter((d) => d.value === value)[0].id);
  };

  return (
    <div>
      <LendingStatusFilter
        dropValue={dropValue}
        STATUS_DATA={STATUS_DATA}
        onSelect={onSelect}
      />
      <LendingListForm dropValue={dropValue} />
    </div>
  );
};

export default LendingPage;
