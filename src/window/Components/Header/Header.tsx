import React from "react";
import styles from "./Header.module.scss";

const Header: any = () => {

  return (
  <div className={styles.Header}>
    <h1 className={styles.Name}>ToDo-List v2.0</h1>
    <div className={styles.Header__btns}>
      <button>_</button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 64 64"
        >
          <path
            fill="currentColor"
            d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"
          />
        </svg>
      </button>
    </div>
  </div>
  )
};

export default Header;
