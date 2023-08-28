import styles from "./PageCreate.module.css";

const CreatureSpecs = (props) => {
  return (
    <div className={styles.creature_specs_wrapper}>
      {/* Display Skills */}
      <p
        className={`${
          props.skills === "" || props.skills === " " ? styles.loading : ""
        } ${styles.creature_specs_information}`}
      >
        <b>{props.skills === "" || props.skills === " " ? "" : "Skills:"}</b>
        {props.skills === "" || props.skills === " "
          ? ""
          : props.skills.split("$").map((skill) => {
              return <li>{skill}</li>;
            })}
      </p>
      {/* Display Saving Throws */}
      <p
        className={`${
          props.savingThrows === "" || props.savingThrows === " "
            ? styles.loading
            : ""
        } ${styles.creature_specs_information}`}
      >
        <b>
          {props.savingThrows === "" || props.savingThrows === " "
            ? ""
            : "Saving Throws:"}
        </b>
        {props.savingThrows === "" || props.savingThrows === " "
          ? ""
          : props.savingThrows.split("$").map((savingThrow) => {
              return <li>{savingThrow}</li>;
            })}
      </p>
      {/* Display Senses */}
      <p
        className={`${
          props.senses === "" || props.senses === " " ? styles.loading : ""
        } ${styles.creature_specs_information}`}
      >
        <b>{props.senses === "" || props.senses === " " ? "" : "Senses:"}</b>
        {props.senses === "" || props.senses === " "
          ? ""
          : props.senses.split("$").map((sense) => {
              return <li>{sense}</li>;
            })}
      </p>
      {/* Display Languages */}
      <p
        className={`${
          props.languages === "" || props.languages === " "
            ? styles.loading
            : ""
        } ${styles.creature_specs_information}`}
      >
        <b>{props.languages === "" ? "" : "Languages:"}</b>
        {props.languages === "" || props.languages === " "
          ? ""
          : props.languages.split("$").map((language) => {
              return <li>{language}</li>;
            })}
      </p>
    </div>
  );
};

export default CreatureSpecs;
