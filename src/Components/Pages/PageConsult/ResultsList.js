import FilterButton from "./FilterButton";

const ResultsList = ({ data, addToFilter, isResults }) => {
  return (
    <div className="results-list">
      {data.map((d) => {
        return (
          <FilterButton
            name={isResults ? d.name : d}
            filter={isResults ? d.index : d}
            onAddFilter={addToFilter}
          />
        );
      })}
    </div>
  );
};

export default ResultsList;
