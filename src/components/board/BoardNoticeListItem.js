import { Link } from "react-router-dom";

const id = "1";
const title = "공지사항 제목";
const adminName = "관리자";
const createdAt = "2022-02-02";
// const updatedAt = "공지수정일";
const readCounts = "11";

const BoardNoticeListItem = () => {
  const BoardNoticeListItemArray = [
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
              {BoardNoticeListItemArray.map((bnlia) => (
                <td key={`${bnlia.className}`} className={bnlia.className}>
                  {bnlia.value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </Link>
    </div>
  );
};

export default BoardNoticeListItem;
