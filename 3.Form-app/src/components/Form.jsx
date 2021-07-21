import React from 'react';
import '../styles/form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        validName: '',
      },
      surname: {
        value: '',
        validSurname: '',
      },
      email: {
        value: '',
        validEmail: '',
      },
      pass: {
        value: '',
        validPass: '',
      },
      passRepeat: {
        value: '',
        validPassRepeat: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  
  handleChange(e) {
    const nameValidator = /^[a-zA-Z]{3,16}$/;
    const emailValidator =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(e.target.value);
    this.setState((state) => ({
      state[e.target.name].value : e.target.value
    }))
  }

  mouseLeave(e) {
    if(e.target.value === '') {
      this.setState({
        validName: 'Enter your name',
      })
    } 
  }


  render() {
    return (
      <div className='form-wrapper'>
        <form>
            <div>
              <div className='gender-group'>
                <label>Male
                  <input name='gender' value='male' type='radio' required />
                </label>
                <label>Female
                  <input name='gender' value='female' type='radio' required />
                </label>
              </div>
              <div className='input-group'>
                <input onChange={this.handleChange} onBlur={this.mouseLeave} className='input' name='name' type="text" placeholder="Name" />
                <p>{this.state.name.validName}</p>
                <input onChange={this.handleChange} onBlur={this.mouseLeave} className='input' name='surname' type="text" placeholder="Surname" />
                <p>{this.state.validSurname}</p>
                <input onChange={this.handleChange} onBlur={this.mouseLeave} className='input' name='email' type="text" placeholder="Email" />
                <p>{this.state.validEmail}</p>
                <input onChange={this.handleChange} onBlur={this.mouseLeave} className='input' name='pass' type="text" placeholder="Password" />
                <p>{this.state.validPass}</p>
                <input onChange={this.handleChange} onBlur={this.mouseLeave} className='input' name='passRepeat' type="text" placeholder="Repeat password" />
                <p>{this.state.validPassRepeat}</p>
              </div>
              <div>
                <button className='submit-btn' type='submit'>
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