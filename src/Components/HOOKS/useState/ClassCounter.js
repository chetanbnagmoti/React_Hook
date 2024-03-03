import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decreaseCount = () => {
    if (this.state.count > 0) {
      return this.setState({
        count: this.state.count - 1,
      });
    }
    else{
        return 0
    }
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <main>
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={() => this.increaseCount()}>Count +</button>
          <button onClick={() => this.decreaseCount()}>Count -</button>
          <button onClick={() => this.reset()}>Reset</button>
        </div>
      </main>
    );
  }
}

export default ClassCounter;
