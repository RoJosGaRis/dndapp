import styles from "./PageCreate.module.css";
import CreatureNames from "./CreatureNames";

const CreatureFeatures = (props) => {
  return (
    <div className={styles.creature_features_wrapper}>
      <CreatureNames
        className={styles.creature_names}
        onCurrentCreatureChange={props.onCurrentCreatureChange}
        names={props.names}
      ></CreatureNames>
    </div>
  );
};

export default CreatureFeatures;
