import React from "react";
import { useDispatch } from "react-redux";
import styles from './TodoItem.module.scss'
import { removeTodo, completeTodo } from "../../../data/reducers/todosSlice";

const TodoItem:any = (props:any) => {

  const dispatch = useDispatch()

  const removeTodoHandler = (id:any) => {
    dispatch(removeTodo(id))
  }

  const completeTaskHandler = (todo: any) => {
    const completedTodo = {
      id: todo.id,
      title: todo.title,
      completed: true,
    }
    dispatch(completeTodo(completedTodo))
  }

    return(
        <div className={(props.todo.completed === false) ? styles.todo__item : styles.todo__item_completed}>
              <p className={styles.todo__discription}>{props.todo.title}</p>
              <div className={styles.todo__item_btns}>
                <button className={(props.todo.completed === false) ? styles.accept : styles.accept_none}
                  onClick={() => completeTaskHandler(props.todo)}>Done</button>


{/* Удаление Todo */}
                <button className={styles.close} onClick={() => removeTodoHandler(props.todo.id)}>
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
}
export default TodoItem