import { useState, useEffect } from "react";

const notice = "공지사항";
const information = "이용안내";
const map = "오시는 길";

const BoardSidebar = ({ getMode }) => {
  const [mode, setMode] = useState("공지사항");

  useEffect(() => {
    if (mode === "오시는 길") {
      getMode("오시는 길");
    } else if (mode === "이용안내") {
      getMode("이용안내");
    }

    getMode(mode);
  }, [mode, getMode]);

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
