import React, { useState, useEffect } from "react";
import "./index.module.scss";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";
import TodoList from "../Components/TodoList/TodoList";


const App: React.FC = () => {

  return (
    <div className={styles.Main}>
      <motion.div drag dragMomentum={false} className={styles.App}>

        <Header/>

        <div className={styles.Todos}>

          <Form/>
          
          <TodoList/>
          
        </div>
      </motion.div>
    </div>
  );
};

export default App;
