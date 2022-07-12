import React from "react";
import styles from './TodoList.module.scss'

const Todos: any = () =>{
    return(
        <div className={styles.Todos__In}>
            <div className={styles.todo}>
              <div className={styles.todo__list}>
                List
              </div>
            </div>
          </div>
    )
}

export default Todos