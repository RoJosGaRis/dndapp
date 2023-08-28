import styles from "./PageCreate.module.css";

const CreatureNames = (props) => {
  return (
    <select
      className={styles.creature_names_wrapper}
      onChange={props.onCurrentCreatureChange}
    >
      <option className={styles.creature_names_name} value="">
        Select a creature
      </option>
      {props.names.map((creature) => {
        return (
          <option className={styles.creature_names_name} value={creature.id}>
            {creature.name}
          </option>
        );
      })}
    </select>
  );
};

export default CreatureNames;
