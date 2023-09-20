import { React, useState } from "react";
import styles from "./LandingPage.module.scss";

const LandingPageInput = ({ inputText }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  let hasText = false;

  const toggleShrinkClass = () => {
    if (hasText) return;
    setIsShrunk((prevState) => !prevState);
  };

  const handleInputChange = (event) => {
    if (event.target.value === "") {
      hasText = false;
    } else {
      hasText = true;
    }
  };

  return (
    <div className={styles.pageInput}>
      <label
        className={`${styles.inputLabel} ${isShrunk ? styles.shrink : ""}`}
      >
        {inputText}
      </label>
      <input
        onFocus={toggleShrinkClass}
        onBlur={toggleShrinkClass}
        onChange={handleInputChange}
        className={styles.inputText}
        type="text"
      />
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <LandingPageInput inputText="Username" />
          <LandingPageInput inputText="Password" />
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
