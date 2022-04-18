import { Link } from "react-router-dom";

const NoticesListItem = ({ id, title, adminName, createdAt, readCounts }) => {
  const BoardNoticesItemArray = [
    { value: id, className: "num" },
    { value: title, className: "title" },
    { value: adminName, className: "adminName" },
    { value: createdAt, className: "createdAt" },
    // { value: updatedAt, className: "updatedAt" },
    { value: readCounts, className: "readCounts" },
  ];
  return (
    <div id="noticesListItem">
      <Link to="/boards/detail" style={{ textDecoration: "none" }}>
        <table className="list">
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
      </Link>
    </div>
  );
};

export default NoticesListItem;
