import AbilityScores from "../PageConsult/SchemasPages/AbilityScores";
import Alignments from "../PageConsult/SchemasPages/Alignments";
import Backgrounds from "./SchemasPages/Backgrounds";
import Conditions from "./SchemasPages/Conditions";
import styles from "./PageConsult.module.css";
import PageConsult from "./PageConsult";

const ResultsDisplay = ({ results, type }) => {
  return (
    <div className={styles.resultsDisplay}>
      {type === "ability-scores" && (
        <AbilityScores results={results}></AbilityScores>
      )}
      {type === "alignments" && <Alignments results={results}></Alignments>}
      {type === "backgrounds" && <Backgrounds results={results}></Backgrounds>}
      {type === "conditions" && <Conditions results={results}></Conditions>}
    </div>
  );
};

export default ResultsDisplay;
