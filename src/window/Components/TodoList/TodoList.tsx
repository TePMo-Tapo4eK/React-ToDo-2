import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";

const Todos: any = () => {
  const todosList: any = useSelector((state: any) => state.todo.todos);
  const completedTodosList: any = useSelector((state:any) => state.todo.completedTodos)
  return (
    <div className={styles.Todos__In}>
      <div className={styles.todo}>
        <div className={styles.todo__list}>
          {(todosList.length !== 0) ? todosList.map((todo: any) => (
            <TodoItem key={todo.id} todo={todo}/>
          )) : <div className={styles.nothing}>You can add new task</div>}

          { completedTodosList.map((todo: any) => (
            <TodoItem key={todo.id} todo={todo}/>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Todos;
