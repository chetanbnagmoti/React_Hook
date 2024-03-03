import React,{useEffect,useState} from "react";
import axios from "axios";

function DataFetching(){

    const [post,setPost] =useState([]);

    useEffect(()=>{

       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(res => {
        console.log(res.data)
        setPost(res.data)
       })
       .catch(err =>{
        console.log(err)
       })
       
    },[])

    return(
        <main>
            <div>
               {post.map(itme=><h1 key={itme.id}>{itme.id} . {itme.body}</h1>)}
            </div>
        </main>
    )
}
export default DataFetching;