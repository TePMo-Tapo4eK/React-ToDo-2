import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from './TodoList.module.scss'
//какая-то фигня с массивом, нужно разобраться с выводом его, не работает map
const Todos: any = () =>{
    const todosList:any = useSelector(state => state.todos)
  console.log(typeof todosList)
    return(
        <div className={styles.Todos__In}>
            <div className={styles.todo}>
              <div className={styles.todo__list}>
                {todosList.map(e => console.log(e))}
                <p>конец</p>
              </div>
            </div>
          </div>
    )
}

export default Todos