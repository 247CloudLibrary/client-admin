import { Link, useNavigate } from "react-router-dom";

const BoardNoticeListItem = ({ id, title, createdAt, readCounts }) => {
  const navigate = useNavigate();

  const BoardNoticeListItemArray = [
    { value: id, className: "num" },
    { value: title, className: "title" },
    { value: "관리자", className: "adminName" },
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
