import { FaSearch } from "react-icons/fa";

const BookSearchFilter = ({ text, onChange }) => {
  return (
    <div className="search-bar">
      <FaSearch className="icon" />
      <input
        type="search"
        placeholder="도서 검색"
        value={text}
        onChange={onChange}
        style={{
          width: "25rem",
          height: "2.5rem",
          fontSize: "1.3rem",
        }}
      />
    </div>
  );
};

export default BookSearchFilter;
