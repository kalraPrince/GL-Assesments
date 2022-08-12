import counterContext from "./ContextCreation"
import Increment from "./Increment";
import Decrement from "./Decrement";
import {useState} from "react"
function ContextProvider(){
   // console.log("hi");
   const [count,setCount] = useState(0);
   const Increse = () =>{
    setCount(count+1);
   }
   const Decrease =()=> {
    setCount(count-1);
   }
       return(<div>
        <counterContext.Provider value={{value:count,IncreaseCount:Increse,DecreaseCount:Decrease}}>
        <Increment></Increment>
        <Decrement></Decrement>
        </counterContext.Provider>
    </div>)
}
export default ContextProvider;