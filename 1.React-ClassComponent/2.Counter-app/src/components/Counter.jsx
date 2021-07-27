import React from "react";
import '../styles/counter.css';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0,
        minValue: 0,
        maxValue: Infinity,
        step: 1,
      };

      this.decrease = this.decrease.bind(this);
      this.increase = this.increase.bind(this);
      this.reset = this.reset.bind(this);
      this.minValue = this.minValue.bind(this);
      this.maxValue = this.maxValue.bind(this);
      this.step = this.step.bind(this);
    }

    decrease(e) {
      if (this.state.value - this.state.step <= this.state.minValue) {
        e.target.disabled = true;
      }
      
      this.setState((prevState) => ({
        value: prevState.value - prevState.step,
      }));

      localStorage.setItem('value', this.state.value - this.state.step);

      document.getElementById('increase').disabled = false;
    }

    reset() {
      this.setState({
        value: 0,
        minValue: 0,
        maxValue: Infinity,
        step: 1,
      });

      localStorage.setItem('value', '0');
      localStorage.setItem('minValue', '0');
      localStorage.setItem('maxValue', 'Infinity');
      localStorage.setItem('step', '1');

      document.getElementById('decrease').disabled = true;
      document.getElementById('increase').disabled = false;
    }

    increase(e) {
      if (this.state.value + this.state.step >= this.state.maxValue) {
        e.target.disabled = true;
      }

      this.setState((prevState) => ({
        value: prevState.value + prevState.step,
      }));

      localStorage.setItem('value', this.state.value + this.state.step);

      document.getElementById('decrease').disabled = false;
    }

    minValue(e) { 
      const val = Number(e.target.value);

      this.setState((prevState) => ({
        minValue: val >= prevState.maxValue ? prevState.maxValue : val,
        value: val >= prevState.maxValue ? prevState.maxValue : val,
      }))

      localStorage.setItem('minValue', val >= this.state.maxValue ? this.state.maxValue : val);
      localStorage.setItem('value', val >= this.state.maxValue ? this.state.maxValue : val);

      document.getElementById('decrease').disabled = true;
      document.getElementById('increase').disabled = false;
    }

    maxValue(e) {
      const val = Number(e.target.value);

      this.setState((prevState) => ({
        maxValue: val <= prevState.minValue ? prevState.minValue : val,
      }));

      localStorage.setItem('maxValue', val <= this.state.minValue ? this.state.minValue : val);
    }

    step(e) {
      const val = Number(e.target.value);

      this.setState({step: val});

      localStorage.setItem('step', val);
    }
  
    render() {
      return (
        <div>
          <div>
            <label>Min value:
            <input onChange={this.minValue} value={this.state.minValue} type='number' className='minVal'/>
            </label>
            <label>Max value:
            <input onChange={this.maxValue} value={this.state.maxValue} type='number' className='maxVal' />
            </label>Step:
            <input onChange={this.step} value={this.state.step} type='number' className='step' />
          </div>
          <p>{this.state.value}</p>
          <button onClick={this.decrease} name='decrease' id='decrease' className='decrease'>Decrease</button>
          <button onClick={this.reset} name='reset' id='reset' className='reset'>Reset</button>
          <button onClick={this.increase} name='increase' id='increase'>Increase</button>
        </div>
      );
    }
  }

  export default Counter;