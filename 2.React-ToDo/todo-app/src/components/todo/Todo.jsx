import React from 'react';
import Another1 from '../another1/Another1';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      abra: 10,
      fokus: 20,
    };

    this.maybeLikeThis = this.maybeLikeThis.bind(this);
  }

  maybeLikeThis(e) {
    this.setState({
      fokus: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.fokus}</p>
        <Another1 param={this.maybeLikeThis} />
      </div>
    );
  }
}

export default Todo;
