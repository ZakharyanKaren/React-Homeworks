import React from 'react';

class Another1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <input onChange={this.props.param} />;
  }
}

export default Another1;
