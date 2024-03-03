import React,{useEffect,useState} from "react";
import axios from "axios";

function DataFetching_Single_Data_button(){

    const [post,setPost] =useState({});
    const[id,setId]=useState(1);
    const[intialId,setClickId]=useState(1);

    const changeTitle=()=>{
        setClickId(id);
    }

    useEffect(()=>{

       axios.get(`https://jsonplaceholder.typicode.com/posts/${intialId}`)
       .then(res => {
        console.log(res)
        setPost(res.data)
       })
       .catch(err =>{
        console.log(err)
       })
       
    },[intialId])

    return(
        <main>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            <button type="button" onClick={changeTitle}>Title</button>
            <div>
              {post.title}
            </div>
        </main>
    )
}
export default DataFetching_Single_Data_button;