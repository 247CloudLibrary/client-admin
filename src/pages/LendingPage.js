import axios from "axios";
import { useEffect, useState } from "react";
import LendingListForm from "../components/lending/LendingListForm";
import LendingStatusFilter from "../components/lending/LendingStatusFilter";
import SearchFilter from "../components/lending/SearchFilter";
import LibraryFilter from "../components/lending/LibraryFilter";

const STATUS_DATA = [
  { id: "", value: "대출 상태 조회" },
  { id: "RETURN", value: "대출 가능" },
  { id: "OUT", value: "대출 중" },
  { id: "OVERDUE", value: "연체 중" },
  { id: "LOSS", value: "분실" },
];

const LendingPage = () => {
  const [dropValue, setDropValue] = useState("");
  const [text, setText] = useState("");
  const [libraryValue, setLibraryValue] = useState("");
  const [libraryData, setLibraryData] = useState("");

  useEffect(() => {
    axios
      .get("http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/libraries")
      .then((result) => {
        setLibraryData(result.data.data);
      });
  }, []);

  const onSelect = (e) => {
    const { value } = e.target;
    setDropValue(STATUS_DATA.filter((d) => d.value === value)[0].id);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setLibraryValue(libraryData.filter((d) => d.name === value)[0].id);
  };

  console.log(libraryValue);

  return (
    <div>
      <LendingStatusFilter
        dropValue={dropValue}
        STATUS_DATA={STATUS_DATA}
        onSelect={onSelect}
      />
      <SearchFilter text={text} onChange={onChange} />
      <LibraryFilter
        libraryValue={libraryValue}
        handleChange={handleChange}
        libraryData={libraryData}
      />
      <LendingListForm
        dropValue={dropValue}
        text={text}
        libraryValue={libraryValue}
      />
    </div>
  );
};

export default LendingPage;
