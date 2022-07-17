import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";
//какая-то фигня с массивом, нужно разобраться с выводом его, не работает map
//что-то с типами, послезавтара доделаю, скорее всего, нужно отдельным обьектом его делать
const Todos: any = () => {
  const todosList: any = useSelector((state: any) => state.todo.todos);
  console.log(todosList);
  return (
    <div className={styles.Todos__In}>
      <div className={styles.todo}>
        <div className={styles.todo__list}>
          {todosList.map((todo: any) => (
            <TodoItem todo={todo}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
