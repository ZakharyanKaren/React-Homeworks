import React from 'react';
import styles from './form.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: localStorage.getItem('name') || '',
        validation: localStorage.getItem('nameValid') || '',
      },
      surname: {
        value: localStorage.getItem('surname') || '',
        validation: localStorage.getItem('surnameValid') || '',
      },
      email: {
        value: localStorage.getItem('email') || '',
        validation: localStorage.getItem('emailValid') || '',
      },
      pass: {
        value: localStorage.getItem('pass') || '',
        validation: localStorage.getItem('passValid') || '',
      },
      passRepeat: {
        value: localStorage.getItem('passRepeat') || '',
        validation: localStorage.getItem('passRepeatValid') || '',
      },
      checked : {
        isTrue: localStorage.getItem('checked') === 'true' ? true : false,
        male: localStorage.getItem('male') === 'true' ? true : false,
        female: localStorage.getItem('female') === 'true' ? true : false,
        validation: localStorage.getItem('checked') === 'true' ? '' : 'Choose your gender',
      },
      submitBtn: {
        disabled: localStorage.getItem('disabled') === 'false' ? false : true,
        validation: localStorage.getItem('disabledValid') || '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.btnChecker = this.btnChecker.bind(this);
  }
  
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'gender') {
      const value = e.target.value;

    if (value === 'male') {
      this.setState(() => ({
        checked: {
          isTrue: true,
          male: true,
          female: false,
          validation: '',
        }
      }), () => {
        localStorage.setItem('checked', true);
        localStorage.setItem('male', true);
        localStorage.setItem('female', false);

        this.btnChecker();
      })
    } else {
      this.setState(() => ({
        checked: {
          isTrue: true,
          male: false,
          female: true,
          validation: '',
        }
      }), () => {
        localStorage.setItem('checked', true);
        localStorage.setItem('male', false);
        localStorage.setItem('female', true);

        this.btnChecker();
      })
    }
    } else {
      this.setState((prevState) => ({
        [name]: {
          value,
          validation: this.validation(name, value),
        },
      }), () => {
        localStorage.setItem('name', this.state.name.value);
        localStorage.setItem('surname', this.state.surname.value);
        localStorage.setItem('email', this.state.email.value);
        localStorage.setItem('pass', this.state.pass.value);
        localStorage.setItem('passRepeat', this.state.passRepeat.value);
        localStorage.setItem('disabled', this.state.submitBtn.disabled);

        localStorage.setItem('nameValid', this.state.name.validation);
        localStorage.setItem('surnameValid', this.state.surname.validation);
        localStorage.setItem('emailValid', this.state.email.validation);
        localStorage.setItem('passValid', this.state.pass.validation);
        localStorage.setItem('passRepeatValid', this.state.passRepeat.validation);
        localStorage.setItem('disabledValid', this.state.submitBtn.disabled);

        this.btnChecker();
      })
    }
  }

  validation(name, value) {
    const nameValidator = /^[a-zA-Z]{3,16}$/;
    const emailValidator =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(name === 'email') {
      return emailValidator.test(value) ? '' : 'Enter valid email';
    } else {
      return nameValidator.test(value) ? '' : `Enter valid ${name}`;
    }
  }

  mouseLeave(e) {
    const name = e.target.name;
    const value = e.target.value;

    const err = 'This field is required';

    if (value === '') {
      this.setState({
        [name] : {
          value,
          validation : err,
        }
      })
    }
  }

  btnChecker() {
    const args = Object.values(this.state);
    this.setState({
      submitBtn: {
        disabled: !args.every((el) => (el.validation === '' && el.value !== '') || el.isTrue === 'true'),
        validation: ''
      }
    });
  }

  handleSubmit() {
    localStorage.clear();
  }

  render() {
    return (
      <div className={styles.formWrapper}>
        <form>
            <div>
              <div>
                <div className={styles.genderGroup}>
                  <label>Male
                    <input onChange={this.handleChange} name='gender' value='male' type='radio' checked={this.state.checked.male} />
                  </label>
                  <label>Female
                    <input onChange={this.handleChange} name='gender' value='female' type='radio' checked={this.state.checked.female} />
                  </label>
                </div>
                <p className={styles.validationStyle}>{this.state.checked.validation}</p>
              </div>
              <div className={styles.inputGroup}>
                <input onChange={this.handleChange} onBlur={this.mouseLeave} value={this.state.name.value} className={styles.input} name='name' type="text" placeholder="Name" />
                <p className={styles.validationStyle}>{this.state.name.validation}</p>
                <input onChange={this.handleChange} onBlur={this.mouseLeave} value={this.state.surname.value} className={styles.input} name='surname' type="text" placeholder="Surname" />
                <p className={styles.validationStyle}>{this.state.surname.validation}</p>
                <input onChange={this.handleChange} onBlur={this.mouseLeave} value={this.state.email.value} className={styles.input} name='email' type="text" placeholder="Email" />
                <p className={styles.validationStyle}>{this.state.email.validation}</p>
                <input onChange={this.handleChange} onBlur={this.mouseLeave} value={this.state.pass.value} className={styles.input} name='pass' type="password" placeholder="Password" />
                <p className={styles.validationStyle}>{this.state.pass.validation}</p>
                <input onChange={this.handleChange} onBlur={this.mouseLeave} value={this.state.passRepeat.value} className={styles.input} name='passRepeat' type="password" placeholder="Repeat password" />
                <p className={styles.validationStyle}>{this.state.passRepeat.validation}</p>
              </div>
              <div>
                <button onClick={this.handleSubmit} className={styles.submitBtn} type='submit' disabled={this.state.submitBtn.disabled}>
                  Submit
                </button>
              </div>
            </div>
        </form>
      </div>
    );
  }
}

export default Form;