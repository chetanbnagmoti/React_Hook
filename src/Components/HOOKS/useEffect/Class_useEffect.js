import React from "react";

class Class_useEffect extends React.Component{
    constructor(props){
        console.log("----------------------constructor---------------------");
        super(props);
        this.state={
            count:0,
            name:''
        }
    }

    componentDidMount(){
        console.log("----------------------componentDidMount---------------------");
       document.title='count '+  this.state.count ;
      }

      componentDidUpdate(prevProps,preState,sanpShot){
        if(preState.count!==this.state.count){
            console.log("----------------------componentDidUpdate---------------------");
            document.title='count '+  this.state.count ;
        }
       
      }

    //   componentWillUnmountDid(){
    //     console.log("----------------------componentWillUnmountDid---------------------");
    //    document.title=0 ;
    //   }

    
        render(){
            console.log("----------------------render---------------------");
           
            return(
                <main>
                    <div>
                    <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></input>
                    {this.state.count}
                    <button onClick={()=>this.setState({count:this.state.count+1})}>Add</button>
                    </div>
                </main>
            )
        }

        
    }
export default Class_useEffect;