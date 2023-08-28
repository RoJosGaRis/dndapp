import styles from "./PageCreate.module.css";

import CreatureNames from "./CreatureNames";
import CreatureBio from "./CreatureBio";

const CreatureFeatures = (props) => {
  return (
    <div className={styles.creature_features_wrapper}>
      <CreatureNames
        className={styles.creature_names}
        onCurrentCreatureChange={props.onCurrentCreatureChange}
        names={props.names}
      ></CreatureNames>
      <CreatureBio
        hitPoints={
          props.creature === undefined ? " " : props.creature.hitPoints
        }
        armorClass={
          props.creature === undefined ? " " : props.creature.armorClass
        }
        speed={props.creature === undefined ? " " : props.creature.speed}
      ></CreatureBio>
    </div>
  );
};

export default CreatureFeatures;
