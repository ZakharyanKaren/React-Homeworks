import React from 'react';
import styles from './form.module.css'
export default class Form extends React.Component {
    render() {
      return (
          <div>
              <form onSubmit={this.props.formSubmitHandler} className={styles.form}>
                <input onChange={this.props.inputValueChange} value={this.props.inputValue} className={styles.input} />
                <button type='submit' className={styles.button}>Submit</button>
              </form>
          </div>
        );
    }
}