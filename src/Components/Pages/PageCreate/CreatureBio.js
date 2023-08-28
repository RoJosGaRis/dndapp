import styles from "./PageCreate.module.css";

const CreatureBio = (props) => {
  return (
    <div className={styles.creature_bio_wrapper}>
      <div className={styles.creature_bio_information_wrapper}>
        <p className={styles.creature_bio_information}>{props.race}</p>
        <p className={styles.creature_bio_information}>{props.alignment}</p>
      </div>
      <div className={styles.creature_bio_information_wrapper}>
        <p className={styles.creature_bio_information}>HP: {props.hitPoints}</p>
        <p className={styles.creature_bio_information}>
          AC: {props.armorClass}
        </p>
        <p className={styles.creature_bio_information}>Speed: {props.speed}</p>
      </div>
      <div className={styles.creature_bio_information_wrapper}>
        <p className={styles.creature_bio_information}>
          Challenge: {props.challenge}
        </p>
      </div>
    </div>
  );
};

export default CreatureBio;
