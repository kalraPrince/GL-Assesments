import React from "react";

class OpenTicket extends React.Component {
constructor(props){
    super(props)
    this.state={
        summary:"" // setting state for summary
    }
}
handleChange=(event)=>{
    this.setState({description:event.target.value})
}
handleSubmit = (event) => {
    console.log('handleSubmit ran');
    event.preventDefault();

    // 👇️ clear all input values in the form
    event.target.reset();
  };
render(){
     const {OpenTicket,changeTicketStatus,getdescription} = this.props;
    console.log("Inside Open Component",OpenTicket);
    return(<><h1>Open Tickets</h1>
    <div class="container">
  <div class="row">
    {
        OpenTicket.map((ticket)=>(
            <div class="col-4 mt-5">
    <div class="card " className="card-ex" style={{ backgroundColor: ticket.priority==1 ? "#a6ee9f": ticket.priority==2?"#ffff00":"#ec6e6e"}}>
      <div class="card-body">
      <img class="card-img-top" src={ticket.img} alt="Card image cap"></img>
        <h5 class="card-title">{getdescription(ticket.status)}</h5>
        <h6>TimeStamp : {ticket.timestamp}</h6>
        <p class="card-text">{ticket.description}</p>
       
        <input placeholder="Enter Summary" onChange={(e)=>this.handleChange(e)}></input>
 
        <button type="button" class="btn btn-danger" onClick = {()=>changeTicketStatus(ticket.id,this.state.description)}>Close Ticket</button>
      </div>
      <div> 
        </div>
    </div>
  </div>
        ))
    }
    </div>
    </div>
    </>)
}
}
export default OpenTicket;