import React from 'react';
import styles from './form.module.css';
import PropTypes from 'prop-types';
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

Form.propTypes = {
  formSubmitHandler: PropTypes.func,
  inputValueChange: PropTypes.func,
  inputValue: PropTypes.string,
}