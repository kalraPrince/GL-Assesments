import React from "react";

class ClosedTicket extends React.Component {
    constructor(props){
        super(props)
    
    }
    // getdescription=(ticket)=>{
    //     if(ticket===1){
    //         return "Open Ticket"
    //     }
    //     else{
    //         return "Closed Ticket"
    //     }
    // }
render(){
    const {ClosedTicket,getdescription} = this.props;
    return(<><h1>closed Tickets</h1>
     <div class="container">
  <div class="row">
    {
       ClosedTicket.map((ticket)=>(
            <div class="col-4 mt-5">
                
    <div class="card " className="card-ex"  style={{ backgroundColor: ticket.priority==1 ? "#a6ee9f": ticket.priority==2?"#ffff00":"#ec6e6e"}}>
      <div class="card-body">
      <img class="card-img-top" src={ticket.img} alt="Card image cap"></img>
        <h5 class="card-title">{getdescription(ticket.status)}</h5>
        <h6>TimeStamp : {ticket.timestamp}</h6>
        <p class="card-text">{ticket.description}</p>
        {/* <h5>Ticket is Now closed call Admin to Open It again</h5> */}
        <h5>{ticket.summary}</h5>
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
export default ClosedTicket;