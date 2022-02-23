import React,{Component} from 'react';
import axios from 'axios';
import Hoteldisplay from './Hoteldetails';

const url = "https://developershardul23.herokuapp.com/hotelsdetails"

class Hoteldetails extends Component{
    constructor(){
        super()

        this.state={
            hotel:''
        }
    }

    render(){
        return(
            <Hoteldisplay hoteldata={this.state.hotel}/>
        )
    }

    async componentDidMount(){
        var hotelid = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelid}`)
        this.setState({hotel:response.data[0]})
    }

    /*componentDidMount(){
        var hotelid = this.props.match.params.id;
        axios.get(`${url}/${hotelid}`)
        .then((response) => {this.setState({hotel:response.data})})
    }*/
}

export default Hoteldetails