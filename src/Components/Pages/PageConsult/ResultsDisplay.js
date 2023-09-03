import AbilityScores from "../PageConsult/SchemasPages/AbilityScores";
import Alignments from "../PageConsult/SchemasPages/Alignments";

const ResultsDisplay = ({ results, type }) => {
  return (
    <div className="results-display">
      {type === "ability-scores" && (
        <AbilityScores results={results}></AbilityScores>
      )}
    </div>
  );
};

export default ResultsDisplay;
