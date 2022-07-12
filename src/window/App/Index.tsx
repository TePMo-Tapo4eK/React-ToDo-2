import React, { useState, useEffect } from "react";
import "./index.module.scss";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import Header from "../Components/Header/Header";


const App: React.FC = () => {

  return (
    <div className={styles.Main}>
      <motion.div drag dragMomentum={false} className={styles.App}>

        <Header/>

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
