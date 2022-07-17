import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "../../../data/reducers/todosSlice";
import styles from './Form.module.scss'

const Form: any = () => {

  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  
  const addTodo = () => {
    const todo = {
      title: value,
      completed: false,
    }

    dispatch(setTodo(todo))
    setValue('')
  }
    return(
        <div className={styles.Form}>
            <input
              type="text"
              placeholder="Task..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
            ></input>
            <button onClick={addTodo}>Add Todo</button>
          </div>
    )
}
export default Form