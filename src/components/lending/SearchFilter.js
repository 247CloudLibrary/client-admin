import { BiSearch } from "react-icons/bi";

const SearchFilter = ({ text, onChange }) => {
  return (
    <div className="main">
      <form className="home__search-bar">
        <input
          name="search-home"
          type="search"
          onChange={onChange}
          autoComplete="off"
          placeholder="회원 조회"
          value={text}
        />
        <label htmlFor="search-home" className="label-name">
          <span className="content-name">회원 번호</span>
        </label>
        <BiSearch className="icon" />
      </form>
    </div>
  );
};

export default SearchFilter;
