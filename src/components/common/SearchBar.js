import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const navigate = useNavigate();
  const onSearch = (event) => {
    event.preventDefault();
    navigate("/composite-list");
  };

  return (
    <form className="home__search-bar">
      <input
        name="search-home"
        id="search-input"
        type="text"
        autoComplete="off"
        required
      />
      <label htmlFor="search-home" className="label-name">
        <span className="content-name">Book Title</span>
      </label>
      <BiSearch className="icon" />
    </form>
  );
};

export default SearchBar;
