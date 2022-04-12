import { useState, useEffect } from "react";

const notice = "공지사항";
const information = "이용안내";
const map = "오시는 길";

const BoardSidebar = ({ getText, getList, getMap }) => {
  const [mode, setMode] = useState("공지사항");

  useEffect(() => {
    if (mode === "공지사항") {
      getMap(false);
      getList(true);
      getText("공지사항");
    } else if (mode === "이용안내") {
      getMap(false);
      getList(false);
      getText("이용안내");
    } else {
      getMap(true);
      getText("오시는 길");
    }
  }, [mode, getList, getText, getMap]);

  useEffect(() => {
    console.log("Mode:", mode);
  }, [mode]);

  const BoardSidebarList = [
    { value: notice, className: "notice" },
    { value: information, className: "information" },
    { value: map, className: "map" },
  ];

  return (
    <div id="sidebar">
      {BoardSidebarList.map((bsl, index) => (
        <label key={bsl.value} className="label-btn">
          <input
            type="radio"
            name="sidebar-btn"
            onClick={() => {
              setMode(`${bsl.value}`);
            }}
            defaultChecked={index === 0}
          />
          <span className={bsl.className}>{bsl.value}</span>
        </label>
      ))}
    </div>
  );
};

export default BoardSidebar;
