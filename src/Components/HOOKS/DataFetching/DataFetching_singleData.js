import React,{useEffect,useState} from "react";
import axios from "axios";

function DataFetching_Single_Data(){

    const [post,setPost] =useState({});
    const[id,setId]=useState(1);

    useEffect(()=>{

       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(res => {
        console.log(res)
        setPost(res.data)
       })
       .catch(err =>{
        console.log(err)
       })
       
    },[id])

    return(
        <main>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            <div>
              {post.title}
            </div>
        </main>
    )
}
export default DataFetching_Single_Data;