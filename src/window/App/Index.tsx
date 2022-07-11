import React, { useState, useEffect } from "react";
import "./index.module.scss";
import styles from "./index.module.scss";
import { motion } from "framer-motion"

const App: React.FC = () => {

  return (
    <div className={styles.Main}>
      <motion.div drag dragMomentum={false} className={styles.App}>
        <div className={styles.Header}>
          <h1 className={styles.Name}>ToDo-List</h1>
          <div className={styles.Header__btns}>
            <button>_</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="currentColor" d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"/></svg></button>
          </div>
        </div>

        <div className={styles.Todos}>
          <div className={styles.Form}>
            <input
              type="text"
              placeholder="Task..."
              // onChange={(e) => setValue(e.target.value)}
            ></input>
            <button >Add Todo</button>
          </div>
          <div className={styles.Todos__In}>
            <div className={styles.todo}>
              <div className={styles.todo__list}>
                List
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
