import styles from "./SchemasStyles.module.css";

const AbilityScores = ({ results }) => {
  return (
    <div
      className={
        results.full_name === undefined ? "invisible" : styles.resultsDisplay
      }
    >
      <div className={results.full_name === undefined ? "" : styles.mainHeader}>
        {results === undefined ? "" : results.full_name}
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
      <div className={results.skills === undefined ? "" : styles.secondHeader}>
        {results.skills === undefined ? "" : "Skills:"}
        <div className={styles.description}>
          {results.skills === undefined
            ? ""
            : results.skills.map((d, index) => {
                return <li key={index}>{d.name}</li>;
              })}
        </div>
      </div>
    </div>
  );
};

export default AbilityScores;

/*
{
"index":"cha","name":"CHA","full_name":"Charisma",

"desc":["Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.","A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks."],

"skills":[{"name":"Deception","index":"deception","url":"/api/skills/deception"},{"name":"Intimidation","index":"intimidation","url":"/api/skills/intimidation"},{"name":"Performance","index":"performance","url":"/api/skills/performance"},{"name":"Persuasion","index":"persuasion","url":"/api/skills/persuasion"}],"url":"/api/ability-scores/cha"}
*/
