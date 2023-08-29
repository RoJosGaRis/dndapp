import styles from "./PageCreate.module.css";

const CreatureBio = (props) => {
  return (
    <div className={styles.creature_bio_wrapper}>
      <div className={styles.creature_bio_information_wrapper}>
        <p
          className={
            props.race === undefined
              ? "loading"
              : styles.creature_bio_information
          }
        >
          {props.race === undefined ? "" : props.race}
        </p>
        <p
          className={
            props.alignment === undefined
              ? "loading"
              : styles.creature_bio_information
          }
        >
          {props.alignment === undefined ? "" : props.alignment}
        </p>
      </div>
      <div className={styles.creature_bio_information_wrapper}>
        <p
          className={
            props.hitpoints === undefined
              ? "loading"
              : styles.creature_bio_information
          }
        >
          {props.hitpoints === undefined ? "" : `HP: ${props.hitPoints}`}
        </p>
        <p
          className={
            props.armorClass === undefined
              ? "loading"
              : styles.creature_bio_information
          }
        >
          {props.armorClass === undefined ? "" : `AC: ${props.armorClass}`}
        </p>
        <p
          className={
            props.speed === undefined
              ? "loading "
              : styles.creature_bio_information
          }
        >
          {props.speed === undefined ? "" : `Speed: ${props.speed}`}
        </p>
      </div>
      <div className={styles.creature_bio_information_wrapper}>
        <p
          className={
            props.challenge === undefined
              ? "loading"
              : styles.creature_bio_information
          }
        >
          {props.challenge === undefined ? "" : `Challenge: ${props.challenge}`}
        </p>
      </div>
    </div>
  );
};

export default CreatureBio;
