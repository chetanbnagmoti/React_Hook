import React, { useState, useEffect } from "react";
import axios from "axios";



function DataFetching_without_useReducer(){

    const[loading,setLoading]=useState(true);
    const[post,setPost]=useState({});
    const[error,setError]=useState('');

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            setLoading(false);
            setPost(response.data);
            setError('');
        })
        .catch(error=>{
            setLoading(false);
            setPost({});
            setError('somthing went wrong!');
        })
        
    },[])

    return(
        <main>
            <div>
                {loading? 'Loding':post.title}
                {error? error:null}
            </div>
        </main>
    )
}
export default DataFetching_without_useReducer;