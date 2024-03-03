import React ,{useState,useCallback} from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";
function ParentComponet(){


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

//useCallBack(funtion,[dependecyArry]):-