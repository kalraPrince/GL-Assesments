import {createContext} from "react"
const counterContext = createContext({value:0,IncreaseCount:()=>{},DecreaseCount:()=>{}});
export default counterContext;