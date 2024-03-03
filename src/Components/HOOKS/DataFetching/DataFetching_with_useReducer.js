import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState={
 loading:true,
 post:{},
 error:''  
}

const reducer=(currentState,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':{
            return{
                loading:false,
                post:action.payload,
                error:''
            }
        }
        case 'FETCH_Fail':{
            return{
                loading:false,
                post:{},
                error:'Something went wrong !'
            }
        }
        default:
            return currentState
    }

}


function DataFetching_with_useReducer(){

    const[state,dispatch]=useReducer(reducer,initialState);

    

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
          dispatch({type:'FETCH_SUCCESS' ,payload:response.data});
        })
        .catch(error=>{
            dispatch({type:'FETCH_Fail' ,payload:error});
        })
        
    },[])

    return(
        <main>
            <div>
                {state.loading? 'Loding':state.post.title}
                {state.error? state.error:null}
            </div>
        </main>
    )
}
export default DataFetching_with_useReducer;