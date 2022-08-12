
import React,{useState} from "react"
const SimpleState=(props)=> {
   const [count,setCount] = useState(0)
   const increment=()=>{
    setCount(count+1);
   }
   const decrement=()=>{
    setCount(count-1)
   }
    return(<div>
        <button onClick={(e)=>increment()}>Increment</button>
        {count}
        <button onClick={(e)=>decrement()}>Decrement</button>
        </div>)
}
export default SimpleState;