const FilterButton = (props) => {
  return (
    <button
      type="button"
      className="filter-button"
      onClick={() => props.onAddFilter(props.filter)}
    >
      {props.name.replace(/_/g, " ")}
    </button>
  );
};

export default FilterButton;
