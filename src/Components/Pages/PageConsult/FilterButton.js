import styles from "./PageConsult.module.css";

const FilterButton = (props) => {
  return (
    <button
      type="button"
      className={styles.filterButton}
      onClick={() => props.onAddFilter(props.filter)}
    >
      {props.name.replace(/_/g, " ")}
    </button>
  );
};

export default FilterButton;
