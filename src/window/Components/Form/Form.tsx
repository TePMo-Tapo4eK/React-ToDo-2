import React from "react";
import styles from './Form.module.scss'

const Form: any = () => {
    return(
        <div className={styles.Form}>
            <input
              type="text"
              placeholder="Task..."
              // onChange={(e) => setValue(e.target.value)}
            ></input>
            <button >Add Todo</button>
          </div>
    )
}
export default Form