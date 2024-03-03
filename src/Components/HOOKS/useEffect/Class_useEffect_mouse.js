import React from "react";

class Class_useEffect_mouse extends React.Component {
  constructor(props) {
    console.log("----------------------constructor---------------------");
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e) => {
    this.setState({ x: e.x, y: e.y });
  };
  componentDidMount() {
    console.log("----------------------componentDidMount---------------------");
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmountDidMount() {
    console.log("----------------------componentWillUnmountDidMount---------------------");
    window.removeEventListener("mousemove", this.logMousePosition);
  }

  render() {
    console.log("----------------------render---------------------");

    return (
      <main>
        <div>
          <h1>
            X - {this.state.x} & Y- {this.state.y}
          </h1>
        </div>
      </main>
    );
  }
}
export default Class_useEffect_mouse;
