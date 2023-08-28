import styles from "./PageCreate.module.css";

import CreatureNames from "./CreatureNames";
import CreatureBio from "./CreatureBio";
import CreatureTraits from "./CreatureTraits";

const CreatureFeatures = (props) => {
  return (
    <div className={styles.creature_features_wrapper}>
      <CreatureNames
        className={styles.creature_names}
        onCurrentCreatureChange={props.onCurrentCreatureChange}
        names={props.names}
      ></CreatureNames>
      <CreatureBio
        challenge={
          props.creature === undefined ? " " : props.creature.challenge
        }
        race={props.creature === undefined ? " " : props.creature.race}
        alignment={
          props.creature === undefined ? " " : props.creature.alignment
        }
        hitPoints={
          props.creature === undefined ? " " : props.creature.hitPoints
        }
        armorClass={
          props.creature === undefined ? " " : props.creature.armorClass
        }
        speed={props.creature === undefined ? " " : props.creature.speed}
      ></CreatureBio>
      <CreatureTraits
        featuresAndTraits={
          props.creature === undefined ? " " : props.creature.featuresAndTraits
        }
      ></CreatureTraits>
    </div>
  );
};

export default CreatureFeatures;
