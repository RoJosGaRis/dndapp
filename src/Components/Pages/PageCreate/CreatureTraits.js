import styles from "./PageCreate.module.css";

const CreatureTraits = (props) => {
  return (
    <div
      className={
        props.featuresAndTraits === undefined
          ? styles.loading
          : styles.creature_traits_wrapper
      }
    >
      <p
        className={
          props.featuresAndTraits === undefined
            ? styles.loading
            : styles.creature_traits_header
        }
      >{`${
        props.featuresAndTraits === undefined ? "" : "Features and Traits"
      }`}</p>
      <p
        className={
          props.featuresAndTraits === undefined
            ? styles.loading
            : styles.creature_traits_body
        }
      >
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
