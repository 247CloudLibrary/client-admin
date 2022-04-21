const LendingStatusFilter = ({ dropValue, STATUS_DATA, onSelect }) => {
  return (
    <div>
      <select onChange={onSelect}>
        {STATUS_DATA.map((data) => {
          return <option key={data.id}>{data.value}</option>;
        })}
      </select>
    </div>
  );
};

export default LendingStatusFilter;
