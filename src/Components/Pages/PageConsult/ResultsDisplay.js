import AbilityScores from "../PageConsult/SchemasPages/AbilityScores";
import Alignments from "../PageConsult/SchemasPages/Alignments";
import Backgrounds from "./SchemasPages/Backgrounds";

const ResultsDisplay = ({ results, type }) => {
  return (
    <div className="results-display">
      {type === "ability-scores" && (
        <AbilityScores results={results}></AbilityScores>
      )}
      {type === "alignments" && <Alignments results={results}></Alignments>}
      {type === "backgrounds" && <Backgrounds results={results}></Backgrounds>}
    </div>
  );
};

export default ResultsDisplay;
