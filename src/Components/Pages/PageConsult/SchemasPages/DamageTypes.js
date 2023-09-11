import styles from "./SchemasStyles.module.css";

const DamageTypes = ({ results }) => {
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

export default DamageTypes;

/*
{
"index":"bludgeoning",
"name":"Bludgeoning",
"desc":["Blunt force attacks, falling, constriction, and the like deal bludgeoning damage."],
"url":"/api/damage-types/bludgeoning"}
*/
