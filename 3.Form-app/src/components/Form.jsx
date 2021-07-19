import React from 'react';
import '../styles/form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValid: '',
    };

    this.validate = this.validate.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  
  validate(e) {
    const regex = /^[a-zA-Z ]{3,16}$/;
    
    this.setState({
      nameValid: !regex.test(e.target.value) ? 'Enter valid name' : '',
    })
  }

  mouseLeave(e) {
    if(e.target.value === '') {
      this.setState({
        nameValid: 'Enter your name',
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
                <input onChange={this.validate} onBlur={this.mouseLeave} className='input' name='Name' type="text" placeholder="Name" />
                <p>{this.state.nameValid}</p>
                <input className='input' name='Surname' type="text" placeholder="Surname" />
                <p></p>
                <input className='input' name='Email' type="text" placeholder="Email" />
                <p></p>
                <input className='input' name='password' type="text" placeholder="Password" />
                <p></p>
                <input className='input' name='password' type="text" placeholder="Repeat password" />
                <p></p>
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