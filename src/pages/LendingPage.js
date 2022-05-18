import axios from "axios";
import { useEffect, useState } from "react";
import LendingListForm from "../components/lending/LendingListForm";
import LendingStatusFilter from "../components/lending/LendingStatusFilter";
import SearchFilter from "../components/lending/SearchFilter";
import LibraryFilter from "../components/lending/LibraryFilter";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Footer from "../components/Footer";

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
    axios.get("https://www.cloudlibrary.shop/v1/libraries").then((result) => {
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
  const navigate = useNavigate();

  const onClickReadBlacklist = () => {
    navigate(`/lending/blacklist`);
  };
  const onClickReadAuth = () => {
    navigate(`/auth`);
  };

  return (
    <>
      <div className="lendingList">
        <Header />
        <div className="lending-list-title">Lending List</div>
        <SearchFilter text={text} onChange={onChange} />
        <div className="lending-Data">
          <div className="lendingFilterWrap">
            <LendingStatusFilter
              dropValue={dropValue}
              STATUS_DATA={STATUS_DATA}
              onSelect={onSelect}
            />
            <LibraryFilter
              libraryValue={libraryValue}
              handleChange={handleChange}
              libraryData={libraryData}
            />
            <div>
              <Button onClick={onClickReadBlacklist} text="블랙리스트 조회" />
              <Button onClick={onClickReadAuth} text="유저 조회" />
            </div>
          </div>
          <div className="lendingListForm">
            <LendingListForm
              dropValue={dropValue}
              text={text}
              libraryValue={libraryValue}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LendingPage;
