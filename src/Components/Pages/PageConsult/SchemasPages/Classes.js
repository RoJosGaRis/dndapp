import styles from "./SchemasStyles.module.css";

const Classes = ({ results }) => {
  return (
    <div className={results.name === undefined ? "" : styles.resultsDisplay}>
      <div className={results.name === undefined ? "" : styles.mainHeader}>
        {results === undefined ? "" : results.name}
      </div>
      <div className={results.hit_die === undefined ? "" : styles.secondHeader}>
        {results.hit_die === undefined ? "" : `Hit Die: d${results.hit_die}`}
      </div>
      <div
        className={
          results.proficiency_choices === undefined ? "" : styles.secondHeader
        }
      >
        {results.proficiency_choices === undefined
          ? ""
          : `Proficiency Choices:  ( ${results.proficiency_choices[0].choose} )`}
        <div className={styles.description}>
          {results.proficiency_choices === undefined
            ? ""
            : results.proficiency_choices[0].from.options.map((d, index) => {
                return <li key={index}>{d.item.name}</li>;
              })}
        </div>
      </div>
      <div
        className={
          results.proficiencies === undefined ? "" : styles.secondHeader
        }
      >
        {results.proficiencies === undefined ? "" : `Proficiencies:`}
        <div className={styles.description}>
          {results.proficiencies === undefined
            ? ""
            : results.proficiencies.map((d, index) => {
                return <li key={index}>{d.name}</li>;
              })}
        </div>
      </div>
      <div
        className={
          results.starting_equipment === undefined ? "" : styles.secondHeader
        }
      >
        {results.starting_equipment === undefined ? "" : `Starting Equipment:`}
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
          : `Starting Equipment:`}
        <div className={styles.description}>
          {results.starting_equipment_options === undefined
            ? ""
            : results.starting_equipment_options.map((d, index) => {
                return <div>{d.desc}</div>;
              })}
        </div>
      </div>
    </div>
  );
};

export default Classes;

/*
{
  "multi_classing":
  {
    "prerequisite_options":
    {
      "type":"ability-scores",
      "choose":1,
      "from":
      {
        "option_set_type":"options_array",
        "options":[
          {
            "option_type":"score_prerequisite",
            "ability_score":
            {
              "index":"str",
              "name":"STR",
              "url":"/api/ability-scores/str"},
              "minimum_score":13},
          {
            "option_type":"score_prerequisite",
            "ability_score":
            {
              "index":"dex",
              "name":"DEX",
              "url":"/api/ability-scores/dex"},
              "minimum_score":13}]}},
  "proficiencies":[
    {
      "index":"light-armor",
      "name":"Light Armor",
      "url":"/api/proficiencies/light-armor"},
      {
        "index":"medium-armor",
        "name":"Medium Armor",
        "url":"/api/proficiencies/medium-armor"},
      {
        "index":"shields",
        "name":"Shields",
        "url":"/api/proficiencies/shields"},
      {
        "index":"simple-weapons",
        "name":"Simple Weapons",
        "url":"/api/proficiencies/simple-weapons"},
      {
        "index":"martial-weapons",
        "name":"Martial Weapons",
        "url":"/api/proficiencies/martial-weapons"}]},
  "subclasses":[
    {
      "index":"champion",
      "name":"Champion",
      "url":"/api/subclasses/champion"}],
  "url":"/api/classes/fighter"}
*/
