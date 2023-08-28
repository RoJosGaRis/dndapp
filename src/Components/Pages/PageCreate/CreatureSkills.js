import styles from "./PageCreate.module.css";
import AbilityScores from "./AbilityScores";
import CreatureSpecs from "./CreatureSpecs";

const CreatureSkills = (props) => {
  return (
    <div className={`${styles.creature_skills_wrapper}`}>
      <AbilityScores
        scores={
          props.currentCreature === undefined
            ? []
            : props.currentCreature.abilityScores
        }
      ></AbilityScores>
      <CreatureSpecs
        skills={
          props.currentCreature.skills === undefined
            ? ""
            : props.currentCreature.skills
        }
        savingThrows={
          props.currentCreature.savingThrows === undefined
            ? ""
            : props.currentCreature.savingThrows
        }
        senses={
          props.currentCreature.senses === undefined
            ? ""
            : props.currentCreature.senses
        }
        languages={
          props.currentCreature.languages === undefined
            ? ""
            : props.currentCreature.languages
        }
      ></CreatureSpecs>
    </div>
  );
};

export default CreatureSkills;
