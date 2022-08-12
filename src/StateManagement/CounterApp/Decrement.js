import { useContext } from "react"
import counterContext from "./ContextCreation";
const Decrement = () =>{
    const {DecreaseCount,IncreaseCount,value} = useContext(counterContext);
    return(<div>
         {console.log(useContext(counterContext))}
         <h1 style={{color:"red"}}>{value}</h1>
      <button style={{width: '100%',
      height: '30%',justifyContent:"center", alignItems: 'center'}} className="btn btn-primary"onClick={DecreaseCount}>Decrement</button>        
    </div>)
}
export default Decrement;