import styles from "./SchemasStyles.module.css";

const Alignments = ({ results }) => {
  return <div className={styles.resultsDisplay}>{JSON.stringify(results)}</div>;
};

export default Alignments;
