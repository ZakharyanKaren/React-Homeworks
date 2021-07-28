import React from 'react';

export default class Form extends React.Component {
    render() {
      return (
          <div>
              <form onSubmit={this.props.formSubmitHandler}>
                <input onChange={this.props.inputValueChange} value={this.props.inputValue} />
                <button type='submit'>Submit</button>
              </form>
          </div>
        );
    }
}