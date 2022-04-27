const LibrariesSearchFilter = ({ text, onSubmit }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="도서관 검색"
        defaultValue={text}
        onChange={onSubmit}
      />
    </div>
  );
};

export default LibrariesSearchFilter;
