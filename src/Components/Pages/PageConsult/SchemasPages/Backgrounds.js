import styles from "./SchemasStyles.module.css";

const Backgrounds = ({ results }) => {
  return (
    <div className={results.name === undefined ? "" : styles.resultsDisplay}>
      <div className={results.name === undefined ? "" : styles.mainHeader}>
        {results === undefined ? "" : results.name}
      </div>
      <div
        className={
          results.starting_proficiencies === undefined
            ? ""
            : styles.secondHeader
        }
      >
        {results.starting_proficiencies === undefined
          ? ""
          : "Starting Proficiencies:"}
        <div className={styles.description}>
          {results.starting_proficiencies === undefined
            ? ""
            : results.starting_proficiencies.map((d, index) => {
                return <li key={index}>{d.name}</li>;
              })}
        </div>
      </div>
      <div
        className={
          results.starting_proficiencies === undefined
            ? ""
            : styles.secondHeader
        }
      >
        {results.language_options === undefined
          ? ""
          : `Languages: Choose ${results.language_options.choose}`}
      </div>
      <div
        className={
          results.starting_equipment === undefined ? "" : styles.secondHeader
        }
      >
        {results.starting_equipment === undefined ? "" : "Starting Equipment:"}
        <div className={styles.description}>
          {results.starting_equipment === undefined
            ? ""
            : results.starting_equipment.map((d, index) => {
                return (
                  <li key={index}>
                    {d.equipment.name} ( {d.quantity} )
                  </li>
                );
              })}
        </div>
      </div>
      <div
        className={
          results.starting_equipment_options === undefined
            ? ""
            : styles.secondHeader
        }
      >
        {results.starting_equipment_options === undefined
          ? ""
          : "Starting Equipment Options:"}
        <div className={styles.description}>
          {results.starting_equipment_options === undefined
            ? ""
            : results.starting_equipment_options.map((d, index) => {
                return (
                  <li key={index}>
                    {d.from.equipment_category.name} ( {d.choose} )
                  </li>
                );
              })}
        </div>
      </div>
      <div className={results.feature === undefined ? "" : styles.secondHeader}>
        {results.feature === undefined ? "" : "Feature:"}
        <div className={styles.description}>
          {results.feature === undefined ? (
            ""
          ) : (
            <p>
              <b>{results.feature.name} </b>: {results.feature.desc}
            </p>
          )}
        </div>
      </div>
      <div
        className={
          results.personality_traits === undefined ? "" : styles.secondHeader
        }
      >
        {results.personality_traits === undefined
          ? ""
          : `Personality Traits: ( ${results.personality_traits.choose} )`}
        <div className={styles.description}>
          {results.personality_traits === undefined
            ? ""
            : results.personality_traits.from.options.map((d, index) => {
                return <li key={index}>{d.string}</li>;
              })}
        </div>
      </div>
      <div className={results.ideals === undefined ? "" : styles.secondHeader}>
        {results.ideals === undefined
          ? ""
          : `Ideals: ( ${results.ideals.choose} )`}
        <div className={styles.description}>
          {results.ideals === undefined
            ? ""
            : results.ideals.from.options.map((d, index) => {
                return (
                  <li key={index}>
                    {d.desc}
                    <ul>
                      {d.alignments.map((a, index) => {
                        return <li>{a.name}</li>;
                      })}
                    </ul>
                  </li>
                );
              })}
        </div>
      </div>
      <div className={results.bonds === undefined ? "" : styles.secondHeader}>
        {results.bonds === undefined
          ? ""
          : `Bonds: ( ${results.bonds.choose} )`}
        <div className={styles.description}>
          {results.bonds === undefined
            ? ""
            : results.bonds.from.options.map((d, index) => {
                return <li key={index}>{d.string}</li>;
              })}
        </div>
      </div>
      <div className={results.flaws === undefined ? "" : styles.secondHeader}>
        {results.flaws === undefined
          ? ""
          : `Flaws: ( ${results.flaws.choose} )`}
        <div className={styles.description}>
          {results.flaws === undefined
            ? ""
            : results.flaws.from.options.map((d, index) => {
                return <li key={index}>{d.string}</li>;
              })}
        </div>
      </div>
    </div>
  );
};

export default Backgrounds;

/*
"flaws":{"choose":1,"type":"flaws","from":
{
  "option_set_type":"options_array",
  "options":[
    {"option_type":"string","string":"I judge others harshly, and myself even more severely."},
    {"option_type":"string","string":"I put too much trust in those who wield power within my temple's hierarchy."},
    {"option_type":"string","string":"My piety sometimes leads me to blindly trust those that profess faith in my god."},
    {"option_type":"string","string":"I am inflexible in my thinking."},
    {"option_type":"string","string":"I am suspicious of strangers and expect the worst of them."},
    {"option_type":"string","string":"Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."}]}},"url":"/api/backgrounds/acolyte"}
*/
