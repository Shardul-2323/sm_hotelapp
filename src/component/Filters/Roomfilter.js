import React,{Component} from 'react';
import axios from 'axios';

const rurl = "https://developershardul23.herokuapp.com/hotellist";

class Roomfilter extends Component{

    roomFilter = (event) => {
        let roomtype= event.target.value;
        let TripType= sessionStorage.getItem('tripid');
        let rrurl;
        if(roomtype==""){
            rrurl = `${rurl}/${TripType}`
        }else{
            rrurl = `${rurl}/${TripType}?roomtype=${roomtype}`
        }
        axios.get(rrurl)
        .then((response) => {this.props.roompertype(response.data)})

    }

    render(){
        return(
            <React.Fragment>
                <center>Room Type</center>
                <div onChange={this.roomFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room"/>Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room"/>Premium Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room"/>Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room"/>Semi Deluxe Room
                    </label>
                </div>
            </React.Fragment>

        )
    }

}

export default Roomfilter;