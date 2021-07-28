import React from 'react';
import styles from './inputField.module.css';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input
          onChange={this.props.onInputChange}
          onKeyUp={this.props.onKeyUp}
          value={this.props.value}
          className={styles.inputFieldCss}
        />
      </div>
    );
  }
}
