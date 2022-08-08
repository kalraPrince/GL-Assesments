// import React from "react"
// import "./CounterApp.css"

// class CounterApp extends React.Component{
//     constructor(props){
//       super(props);
//       this.state = {
//         count:0
//       }
//     }
//     increaseCount=()=> {
//     this.setState({count : this.state.count+1})
//     }
//     decreaseCount=()=> {
    
//    this.state.count>0 && this.setState({count : this.state.count-1})
//     }
//     render() {
//         return(
//             <div class="body">
//         <div class="card text-center">
//         <div class="card-header">
//           <h1>Counter App</h1>
//         </div>
//         <div class="card-body">
//         <button type="button" class="btn btn-primary" onClick={this.increaseCount}>Plus</button>
//           <h1 class="child">{this.state.count}</h1>
//           <button type="button" class="btn btn-primary btn-class" onClick={this.decreaseCount}>Minus</button>
//         </div>
//       </div>
//       </div>)
//     }
// }
// export default CounterApp;

import React from "react"
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"",
            count:0
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("inside DS",props)
        return {msg:props.initialMsg};
    }

   componentDidMount(){
        console.log("did mount")
        this.setState({count:this.state.count+1})//setstate is triggered
    }
   
    render(){
        console.log('inside render')
        return(
            <div>
                <h1>LifeCycleMethods</h1>
                <h2>{this.state.msg}</h2>
                <h3> no of times rendered {this.state.count }</h3>
                <button>view</button>
            </div>
        )
    }
}
export default LifeCycleMethods
