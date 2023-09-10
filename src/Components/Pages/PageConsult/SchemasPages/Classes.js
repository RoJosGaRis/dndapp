import styles from "./SchemasStyles.module.css";

const Classes = ({ results }) => {
  return (
    <div className={results.name === undefined ? "" : styles.resultsDisplay}>
      <div className={results.name === undefined ? "" : styles.mainHeader}>
        {results === undefined ? "" : results.name}
      </div>
      <div className={results.hit_die === undefined ? "" : styles.secondHeader}>
        {results.hit_die === undefined ? "" : `Hit Die: ${results.hit_die}`}
      </div>
      <div
        className={
          results.proficiency_choices === undefined ? "" : styles.secondHeader
        }
      >
        {results.proficiency_choices === undefined
          ? ""
          : "Proficiency Choices:"}
        <div className={styles.description}>
          <p>
            {results.proficiency_choices === undefined
              ? ""
              : results.proficiency_choices.desc}
          </p>
          {
            results.proficiency_choices === undefined
              ? ""
              : results.proficiency_choices[0].from.options.map((d, index) => {
                  return <li key={index}>{d.item.name}</li>;
                })
            // JSON.stringify(results.proficiency_choices[0].from.)
          }
        </div>
      </div>
    </div>
  );
};

export default Classes;

/*
{
"proficiency_choices":[
  {"desc":"Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival",
  "choose":2,
  "type":"proficiencies",
  "from":{"option_set_type":"options_array",
  "options":[
    {"option_type":"reference",
    "item":{
      "index":"skill-acrobatics",
      "name":"Skill: Acrobatics",
      "url":"/api/proficiencies/skill-acrobatics"}},
    {"option_type":"reference",
    "item":{
      "index":"skill-animal-handling",
      "name":"Skill: Animal Handling",
      "url":"/api/proficiencies/skill-animal-handling"}},
    {"option_type":"reference",
    "item":{
      "index":"skill-athletics",
      "name":"Skill: Athletics",
      "url":"/api/proficiencies/skill-athletics"}},
    {"option_type":"reference",
    "item":{
      "index":"skill-history",
      "name":"Skill: History",
      "url":"/api/proficiencies/skill-history"}},
    {"option_type":"reference",
    "item":{
      "index":"skill-insight",
      "name":"Skill: Insight",
      "url":"/api/proficiencies/skill-insight"}},
    {"option_type":"reference",
    "item":{
      "index":"skill-intimidation",
      "name":"Skill: Intimidation",
      "url":"/api/proficiencies/skill-intimidation"}},
    {"option_type":"reference",
    "item":{
      "index":"skill-perception",
      "name":"Skill: Perception",
      "url":"/api/proficiencies/skill-perception"}},
    {"option_type":"reference",
    "item":{
      "index":"skill-survival",
      "name":"Skill: Survival",
      "url":"/api/proficiencies/skill-survival"}}]}}],
  "proficiencies":[{
    "index":"all-armor",
    "name":"All armor",
    "url":"/api/proficiencies/all-armor"},
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
      "url":"/api/proficiencies/martial-weapons"},
    {
      "index":"saving-throw-str",
      "name":"Saving Throw: STR",
      "url":"/api/proficiencies/saving-throw-str"},
    {
      "index":"saving-throw-con",
      "name":"Saving Throw: CON",
      "url":"/api/proficiencies/saving-throw-con"}],
  "saving_throws":[
    {
      "index":"str",
      "name":"STR",
      "url":"/api/ability-scores/str"},
    {
      "index":"con",
      "name":"CON",
      "url":"/api/ability-scores/con"}],
  "starting_equipment":[],
  "starting_equipment_options":[
    {
      "desc":"(a) chain mail or (b) leather armor, longbow, and 20 arrows",
      "choose":1,
      "type":"equipment",
      "from":{
        "option_set_type":"options_array",
        "options":[
          {
            "option_type":"counted_reference",
            "count":1,
            "of":{
              "index":"chain-mail",
              "name":"Chain Mail",
              "url":"/api/equipment/chain-mail"}},
          {
            "option_type":"multiple",
            "items":[
              {
                "option_type":"counted_reference",
                "count":1,
                "of":{
                  "index":"leather-armor",
                  "name":"Leather Armor",
                  "url":"/api/equipment/leather-armor"}},
                {
                  "option_type":"counted_reference",
                  "count":1,
                  "of":
                  {
                    "index":"longbow",
                    "name":"Longbow",
                    "url":"/api/equipment/longbow"}},
          {
            "option_type":"counted_reference",
            "count":20,
            "of":
            {
              "index":"arrow",
              "name":"Arrow",
              "url":"/api/equipment/arrow"}}]}]}},
      {"desc":"(a) a martial weapon and a shield or (b) two martial weapons",
      "choose":1,
      "type":"equipment",
      "from":
      {
        "option_set_type":"options_array",
        "options":[
          {
            "option_type":"multiple",
            "items":[
              {
                "option_type":"choice",
                "choice":
                {
                  "desc":"a martial weapon",
                  "choose":1,
                  "type":"equipment",
                  "from":
                  {
                    "option_set_type":"equipment_category",
                    "equipment_category":
                    {
                      "index":"martial-weapons",
                      "name":"Martial Weapons",
                      "url":"/api/equipment-categories/martial-weapons"}}}},
              {
                "option_type":"counted_reference",
                "count":1,
                "of":
                {
                  "index":"shield",
                  "name":"Shield",
                  "url":"/api/equipment/shield"}}]},
          {
            "option_type":"choice",
            "choice":
            {
              "desc":"two martial weapons",
              "choose":2,
              "type":"equipment",
              "from":
              {
                "option_set_type":"equipment_category",
                "equipment_category":
                {
                  "index":"martial-weapons",
                  "name":"Martial Weapons",
                  "url":"/api/equipment-categories/martial-weapons"}}}}]}},
      {"desc":"(a) a light crossbow and 20 bolts or (b) two handaxes",
      "choose":1,
      "type":"equipment",
      "from":
      {
        "option_set_type":"options_array",
        "options":[
          {
            "option_type":"multiple","items":[
              {
                "option_type":"counted_reference",
                "count":1,
                "of":
                {
                  "index":"crossbow-light",
                  "name":"Crossbow, light",
                  "url":"/api/equipment/crossbow-light"}},
              {
                "option_type":"counted_reference",
                "count":20,
                "of":
                {
                  "index":"crossbow-bolt",
                  "name":"Crossbow bolt",
                  "url":"/api/equipment/crossbow-bolt"}}]},
          {
            "option_type":"counted_reference",
            "count":2,
            "of":
            {
              "index":"handaxe",
              "name":"Handaxe",
              "url":"/api/equipment/handaxe"}}]}},
      {"desc":"(a) a dungeoneer’s pack or (b) an explorer’s pack",
      "choose":1,
      "type":"equipment",
      "from":
      {
        "option_set_type":"options_array",
        "options":[
          {
            "option_type":"counted_reference",
            "count":1,
            "of":
            {
              "index":"dungeoneers-pack",
              "name":"Dungeoneer's Pack",
              "url":"/api/equipment/dungeoneers-pack"}},
          {
            "option_type":"counted_reference",
            "count":1,
            "of":
            {
              "index":"explorers-pack",
              "name":"Explorer's Pack",
              "url":"/api/equipment/explorers-pack"}}]}}],
  "class_levels":"/api/classes/fighter/levels",
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
