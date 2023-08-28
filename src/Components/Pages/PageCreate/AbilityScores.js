import styles from "./PageCreate.module.css";
import AbilityScore from "./AbilityScore";

const AbilityScores = (props) => {
  return (
    <div
      className={`${props.scores === undefined ? "loading " : ""}${
        styles.ability_scores_wrapper
      }`}
    >
      {props.scores === undefined
        ? []
        : Object.values(props.scores).map((score, index) => {
            return (
              <AbilityScore
                ability={Object.keys(props.scores)[index]}
                value={score.value}
                modifier={score.modifier}
              ></AbilityScore>
            );
          })}
    </div>
  );
};

export default AbilityScores;
