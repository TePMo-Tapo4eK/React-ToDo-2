import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "../../../data/reducers/todosSlice";
import styles from './Form.module.scss'

const Form: any = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const reset = () => {
    dispatch(setTodo(value))
    setValue(() => '')
  }
    return(
        <div className={styles.Form}>
            <input
              type="text"
              placeholder="Task..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
            ></input>
            <button onClick={reset} >Add Todo</button>
          </div>
    )
}
export default Form