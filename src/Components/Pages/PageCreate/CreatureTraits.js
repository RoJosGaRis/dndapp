import styles from "./PageCreate.module.css";

const CreatureTraits = (props) => {
  return (
    <div className={styles.creature_traits_wrapper}>
      <p>Features and Traits</p>
      <p>
        {props.featuresAndTraits === undefined
          ? " "
          : props.featuresAndTraits.split("$").map((feature) => {
              return (
                <li>
                  {" "}
                  <b>{feature.split("//")[0]}</b>
                  {": "}
                  {feature.split("//")[1]}
                </li>
              );
            })}
      </p>
    </div>
  );
};

export default CreatureTraits;
