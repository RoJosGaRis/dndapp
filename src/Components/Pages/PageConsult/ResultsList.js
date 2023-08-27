import FilterButton from "./FilterButton";

const ResultsList = ({ data, addToFilter, removeFromFilter, isResults }) => {
  return (
    <div className="results-list-wrapper">
      {data.map((d) => {
        return (
          <FilterButton
            name={isResults ? d.name : d}
            filter={isResults ? d.index : d}
            onAddFilter={addToFilter}
          />
        );
      })}
      <button
        type="button"
        className={`filter-button back-button ${!isResults ? "hidden" : ""}`}
        onClick={removeFromFilter}
      >
        Back
      </button>
    </div>
  );
};

export default ResultsList;
