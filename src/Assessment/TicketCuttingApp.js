import React from "react";
import ClosedTicket from "./ClosedTicket";
import Navbar from "./Navbar";
import OpenTicket from "./OpenTicket";

class TicketCuttingApp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tickets:this.props.data
        }
        
    }
    // function to get all the opens tickets
    getOpenTicket=()=>{
        const result= this.state.tickets.filter((ticket)=>ticket.status===1)
       const res = [...result].sort((a, b) => b.priority - a.priority);
       return res;
    }
    // method to get the decription of ticket
    getdescription=(ticket)=>{  
        if(ticket===1){
            return "Open Ticket"
        }
        else{
            return "Closed Ticket"
        }
    }
    //method to get all the closed tickets
    getClosedTicket=()=>{
        const result= this.state.tickets.filter((ticket)=>ticket.status===0)
        const res = [...result].sort((a, b) => b.priority - a.priority); // Here we are sorting the tickets based on priorrity
       return res;
    }
    // method to change the status that is closed the ticket
    changeTicketStatus=(ticketId,sumary)=>{
        const temp=[...this.state.tickets]
        const obj=temp.find((ticket)=>ticket.id===ticketId)
        obj.status = 1-obj.status
        obj.summary = sumary
        this.setState({tickets:temp})
    }
    render() {
        return(<>
        <Navbar></Navbar>
        <OpenTicket OpenTicket={this.getOpenTicket()} changeTicketStatus={this.changeTicketStatus} getdescription={this.getdescription}></OpenTicket>
        <ClosedTicket ClosedTicket={this.getClosedTicket()} getdescription={this.getdescription}></ClosedTicket>
        </>)
       
    }

}
export default TicketCuttingApp;