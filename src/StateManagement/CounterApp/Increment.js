import { useContext } from "react"
import counterContext from "./ContextCreation"
const Increment = () =>{
    const {DecreaseCount,IncreaseCount,value} = useContext(counterContext);
    return(<div>
        {console.log(useContext(counterContext))}
      
        <h1 style={{color:"blue"}}>{value}</h1>
      <button style={{width: '100%',
      height: '30%',justifyContent:"center", alignItems: 'center'}}className="btn btn-primary"onClick={IncreaseCount}>Increment</button>        
    </div>)
}
export default Increment;