const LibraryFilter = ({ libraryData, handleChange }) => {
  return (
    <div>
      <select onChange={handleChange}>
        {libraryData &&
          libraryData.map((data) => {
            return <option key={data.id}>{data.name}</option>;
          })}
      </select>
    </div>
  );
};

export default LibraryFilter;
