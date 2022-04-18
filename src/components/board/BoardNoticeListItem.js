import { Link } from "react-router-dom";

const BoardNoticeListItem = ({
  id,
  title,
  adminName,
  createdAt,
  readCounts,
}) => {
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
                <td key={bnlia.className} className={bnlia.className}>
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
