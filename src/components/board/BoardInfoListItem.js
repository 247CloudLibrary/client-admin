import { Link } from "react-router-dom";

// const id = "1";
// const title = "안내제목";
// const adminName = "관리자";
// const createdAt = "2022-22-22";
// // const updatedAt = "안내수정일";
// const readCounts = "222";

const BoardInfoListItem = ({ id, title, adminName, createdAt, readCounts }) => {
  const BoardInfoListItemArray = [
    { value: id, className: "num" },
    { value: title, className: "title" },
    { value: adminName, className: "adminName" },
    { value: createdAt, className: "createdAt" },
    // { value: updatedAt, className: "updatedAt" },
    { value: readCounts, className: "readCounts" },
  ];
  return (
    <div id="boardListItem">
      <Link to="/boards/detail" style={{ textDecoration: "none" }}>
        <table className="list">
          <tbody>
            <tr className="list-value">
              {BoardInfoListItemArray.map((bilia) => (
                <td key={`${bilia.className}`} className={bilia.className}>
                  {bilia.value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </Link>
    </div>
  );
};

export default BoardInfoListItem;
