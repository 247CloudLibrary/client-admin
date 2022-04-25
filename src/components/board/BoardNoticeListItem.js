import { Link, useNavigate } from "react-router-dom";

// const id = "1";
// const title = "아아아아아아아";
// const adminName = "관리자";
// const createdAt = "2222-22-22";
// const readCounts = "222";

const BoardNoticeListItem = ({
  id,
  title,
  adminName,
  createdAt,
  readCounts,
}) => {
  const navigate = useNavigate();

  const BoardNoticeListItemArray = [
    { value: id, className: "num" },
    { value: title, className: "title" },
    { value: adminName, className: "adminName" },
    { value: createdAt, className: "createdAt" },
    // { value: updatedAt, className: "updatedAt" },
    { value: readCounts, className: "readCounts" },
  ];

  const toBoardDetail = () => {
    navigate(`/boards/detail/${id}`, {
      state: { id: id },
    });
  };

  return (
    <div id="boardListItem">
      <table className="list" onClick={toBoardDetail}>
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
    </div>
  );
};

export default BoardNoticeListItem;
