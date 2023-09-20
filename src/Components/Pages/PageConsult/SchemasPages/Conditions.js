import styles from "./SchemasStyles.module.css";

const Conditions = ({ results }) => {
  return (
    <div className={results.name === undefined ? "" : styles.resultsDisplay}>
      <div className={results.name === undefined ? "" : styles.mainHeader}>
        {results === undefined ? "" : results.name}
      </div>
      <div className={results.desc === undefined ? "" : styles.secondHeader}>
        {results.desc === undefined ? "" : "Description:"}
        <div className={styles.description}>
          {results.desc === undefined
            ? ""
            : results.desc.map((d, index) => {
                return <p key={index}>{d}</p>;
              })}
        </div>
      </div>
    </div>
  );
};

export default Conditions;

/*
{
"index":"blinded",
"name":"Blinded",
"desc":["- A blinded creature can't see and automatically fails any ability check that requires sight.","- Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage."],
"url":"/api/conditions/blinded"}
*/
