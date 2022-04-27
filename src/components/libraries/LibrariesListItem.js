import { useNavigate } from "react-router-dom";
import { ImLibrary } from "react-icons/im";

const LibrariesListItem = ({
  id,
  name,
  address,
  email,
  tel,
  operatingTime,
  holiday,
}) => {
  const LibrariesListItemArray = [
    { value: id, name: "도서관ID", className: "library-id" },
    { value: address, name: "주소", className: "address" },
    { value: email, name: "email", className: "email" },
    { value: tel, name: "TEL", className: "tel" },
    { value: operatingTime, name: "운영시간", className: "operating-time" },
    { value: holiday, name: "휴관일", className: "holiday" },
  ];
  const navigate = useNavigate();

  const handleLink = (e) => {
    navigate(`/libraries/detail/${id}`, {
      state: { id: id },
    });
  };
  return (
    <div id="libraries-item">
      <div className="header"></div>
      <div className="library-name">
        <ImLibrary className="icons" />
        <div className="name" onClick={handleLink}>
          {name}
        </div>
      </div>
      <div className="library-listItem">
        {LibrariesListItemArray.map((llia) => (
          <span
            className={llia.className}
            key={llia.value}
          >{`${llia.name}: ${llia.value}`}</span>
        ))}
      </div>
    </div>
  );
};

export default LibrariesListItem;
