import FilterButton from "./FilterButton";
import styles from "./PageConsult.module.css";

const ResultsList = ({ data, addToFilter, removeFromFilter, isResults }) => {
  return (
    <div className={styles.resultsListWrapper}>
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
        className={`${styles.filterButton} ${styles.backButton} ${!isResults ? "hidden" : ""}`}
        onClick={removeFromFilter}
      >
        Back
      </button>
    </div>
  );
};

export default ResultsList;
