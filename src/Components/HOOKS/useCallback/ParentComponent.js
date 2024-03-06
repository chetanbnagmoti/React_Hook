import React ,{useState,useCallback} from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";
function ParentComponet(){

 //useCallback used for performance optimization:-
 
    const[salary,setSalary]=useState(100);
    const[age,setAge]=useState(25);
     
    const incrementSalary= useCallback(()=>{
        setSalary(salary +1000);
    },[salary]) 

    const incrementAge=useCallback(()=>{
        setAge(age +1);
    },[age]) 

    return(
        <div>
            <Title/>
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary}/>
            <Button handleClick={incrementSalary}>increment Salary</Button>
        </div>
    )
}
export default React.memo(ParentComponet) ;

//useCallBack(funtion,[dependecyArry]):-it is hook that will a memoixed version of the callback fuction that only chnages if one of the dependecies has chnaged.

//To stop rendering of componet.
//React.meno =>It is High order componet it is used to don't render thouse componet have not props or state are chnages .