import AbilityScores from "../PageConsult/SchemasPages/AbilityScores";
import Alignments from "../PageConsult/SchemasPages/Alignments";

const ResultsDisplay = ({ results, type }) => {
  return (
    <div className="results-display">
      {type === "ability-scores" && (
        <AbilityScores results={results}></AbilityScores>
      )}
      {type === "alignments" && <Alignments results={results}></Alignments>}
    </div>
  );
};

export default ResultsDisplay;
