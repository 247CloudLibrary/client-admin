const BookSearchFilter = ({ text, onChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="도서 검색"
        value={text}
        onChange={onChange}
      />
    </div>
  );
};

export default BookSearchFilter;
