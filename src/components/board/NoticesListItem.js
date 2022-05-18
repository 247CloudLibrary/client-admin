import { Link, useNavigate } from "react-router-dom";

const NoticesListItem = ({ id, title, adminName, createdAt, readCounts }) => {
  const navigate = useNavigate();

  const BoardNoticesItemArray = [
    { value: id, className: "num" },
    { value: title, className: "title" },
    { value: "관리자", className: "adminName" },
    { value: createdAt, className: "createdAt" },
    // { value: updatedAt, className: "updatedAt" },
    { value: readCounts, className: "readCounts" },
  ];

  const toNoticesDetail = () => {
    navigate(`/notices/detail/${id}`, {
      state: { id: id },
    });
  };

  return (
    <div id="noticesListItem">
      <table className="list" onClick={toNoticesDetail}>
        <tbody>
          <tr className="list-value">
            {BoardNoticesItemArray.map((bnia) => (
              <td key={bnia.className} className={bnia.className}>
                {bnia.value}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NoticesListItem;
