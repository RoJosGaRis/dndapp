import styles from "./PageCreate.module.css";

const CreatureActions = (props) => {
  return (
    <div
      className={
        props.actions === undefined || props.actions === " "
          ? styles.loading + " " + styles.creature_actions_wrapper
          : styles.creature_actions_wrapper
      }
    >
      <p className={styles.creature_actions_header}>
        {props.actions === undefined || props.actions === " "
          ? ""
          : "CreatureActions"}
      </p>
      <p
        className={
          props.actions === undefined || props.actions === " "
            ? styles.loading
            : styles.creature_actions_body
        }
      >
        {props.actions === undefined || props.actions === " "
          ? " "
          : props.actions.split("$").map((action) => {
              return (
                <li>
                  {" "}
                  <b>{action.split("//")[0]}</b>
                  {": "}
                  {action.split("//")[1]}
                </li>
              );
            })}
      </p>
    </div>
  );
};

export default CreatureActions;
