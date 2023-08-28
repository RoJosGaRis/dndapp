import styles from "./PageCreate.module.css";
import AbilityScores from "./AbilityScores";

const CreatureSkills = (props) => {
  return (
    <div className={styles.creature_skills_wrapper}>
      <AbilityScores
        scores={
          props.currentCreature.abilityScores === undefined
            ? []
            : props.currentCreature.abilityScores
        }
      ></AbilityScores>
    </div>
  );
};

export default CreatureSkills;
