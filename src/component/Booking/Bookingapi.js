import React,{Component} from 'react';
import axios from 'axios';
import Bookingview from './Bookingdisplay';

const url ="https://developershardul23.herokuapp.com/allBooking";

class Booking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div className="container">
                <Bookingview bookdata={this.state.booking}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(url)
        .then((response) => {this.setState({booking:response.data})})
    }

}

export default Booking
