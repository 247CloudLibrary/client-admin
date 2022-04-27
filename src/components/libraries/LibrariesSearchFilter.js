const LibrariesSearchFilter = ({ text, onSubmit }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="도서관 검색"
        defaultValue={text}
        onChange={onSubmit}
        style={{ width: "20rem", height: "2.5rem", fontSize: "1.5rem" }}
      />
    </div>
  );
};

export default LibrariesSearchFilter;
