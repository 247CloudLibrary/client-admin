import { FaSearch } from "react-icons/fa";

const LibrariesSearchFilter = ({ text, onSubmit }) => {
  return (
    <div className="search-bar">
      <FaSearch className="icon" />
      <input
        type="search"
        placeholder="도서관 검색"
        defaultValue={text}
        onChange={onSubmit}
        style={{ width: "25rem", height: "2.5rem", fontSize: "1.5rem" }}
      />
    </div>
  );
};

export default LibrariesSearchFilter;
