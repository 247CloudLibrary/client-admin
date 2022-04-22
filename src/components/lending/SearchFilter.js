const SearchFilter = ({ text, onChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="회원 조회"
        value={text}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchFilter;
