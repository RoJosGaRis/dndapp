const FilterButton = (props) => {
  return (
    <button
      type="button"
      className="filter-button"
      onClick={() => props.onAddFilter(props.filter)}
    >
      {props.name}
    </button>
  );
};

export default FilterButton;
