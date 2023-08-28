import styles from "./PageCreate.module.css";

const AbilityScore = (props) => {
  return (
    <div className={styles.ability_scores_score_wrapper}>
      <div className={styles.ability_scores_score_ability}>{props.ability}</div>
      <div className={styles.ability_scores_score_value}>{props.value}</div>
      <div className={styles.ability_scores_score_modifier}>
        {props.modifier}
      </div>
    </div>
  );
};

export default AbilityScore;
