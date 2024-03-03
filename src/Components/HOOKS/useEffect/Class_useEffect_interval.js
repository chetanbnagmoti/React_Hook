import React from "react";

class Class_useEffect_intervale extends React.Component {
  constructor(props) {
    console.log("----------------------constructor---------------------");
    super(props);
    this.state = {
      count:0
    };
  }

   tick=()=>{
    this.setState({count:this.state.count+1});
  }
 
  componentDidMount() {
    console.log("----------------------componentDidMount---------------------");
    this.interval= setInterval(this.tick,1000);
  }

  componentWillUnmountDidMount() {
    console.log("----------------------componentWillUnmountDidMount---------------------");
    clearInterval(this.interval);
  }

  render() {
    console.log("----------------------render---------------------");

    return (
      <main>
        <div>
          <h1>
          {this.state.count}
          </h1>
        </div>
      </main>
    );
  }
}
export default Class_useEffect_intervale;
