import styles from "./SchemasStyles.module.css";

const Alignments = ({ results }) => {
  return (
    <div className={results.name === undefined ? "" : styles.resultsDisplay}>
      <div className={results.name === undefined ? "" : styles.mainHeader}>
        {results === undefined ? "" : results.name}
      </div>
      <div className={results.desc === undefined ? "" : styles.secondHeader}>
        {results.desc === undefined ? "" : "Description:"}
        <div className={styles.description}>
          {results.desc === undefined ? "" : results.desc}
        </div>
      </div>
    </div>
  );
};

export default Alignments;

/*
{
"index":"chaotic-evil",
"name":"Chaotic Evil",
"abbreviation":"CE",
"desc":"Chaotic evil (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil.",
"url":"/api/alignments/chaotic-evil"}
*/
