import React,{Component} from 'react';

import axios from 'axios';
import Suggestiondisplay from './Suggestiondisplay'

const url="https://developershardul23.herokuapp.com/hotellist"

class Suggestionblock extends Component{
    constructor(){
        super()

        this.state={
            suggestions:''
        }
    }
    render(){
        return(
            <div>
                <Suggestiondisplay sudata={this.state.suggestions}/>
            </div>
        )
    }

    componentDidMount(){
        let date=new Date().getDate();
        //let date=8;
        sessionStorage.setItem('date',date)
        let tripid=sessionStorage.getItem('tripid')
        console.log(tripid)
        let outurl;
        if(date>0 && date<11){
            outurl=`${url}/${tripid}?hcost=9000&lcost=6001`
        }
        else if(date>10 && date<21){
            outurl=`${url}/${tripid}?hcost=6000&lcost=3001`
        }
        else if(date>20 && date<32){
            outurl=`${url}/${tripid}?hcost=3000&lcost=1000`
        }
        axios.get(outurl)
        .then((response)=>{this.setState({suggestions:response.data})})
        console.log("outurl>>>>",outurl)
    }
}

export default Suggestionblock;