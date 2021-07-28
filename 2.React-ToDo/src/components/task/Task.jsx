import React from 'react';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input value={this.props.value} />
      </div>
    );
  }
}
