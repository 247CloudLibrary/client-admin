import { BiSearch } from "react-icons/bi";

const SearchFilter = ({ text, onChange }) => {
  return (
    <form className="home__search-bar">
      <input
        name="search-home"
        id="search-input"
        type="text"
        autoComplete="off"
        required
        text={text}
        onChange={onChange}
      />
      <label htmlFor="search-home" className="label-name">
        <span className="content-name">회원 번호</span>
      </label>
      <BiSearch className="icon" />
    </form>
  );
};

export default SearchFilter;
