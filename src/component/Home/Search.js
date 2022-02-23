import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Search.css';

const lurl = "https://developershardul23.herokuapp.com/location";
const hurl = "https://developershardul23.herokuapp.com/hotelsdetails/";

class Search extends Component {
    constructor(){
        super()

        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }
    handleChangeCity = (event) => {
        console.log(event.target.value)
        const cityid = event.target.value;
        fetch(`${hurl}${cityid}`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    handleHotel = (event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    render(){
        console.log("props in search",this.props)
        console.log("state>>>",this.state.location)
        return(
           <div className="imageContainer">
               <div id="logo">
                   R!
               </div>
               <div className="heading" style={{textShadow: "2px 2px 4px orange"}}>
                
                   Book your rooms at Residencia.
               </div>
               <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleChangeCity}>
                        <option>&#128269;&nbsp;&nbsp;SELECT CITY</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="restinput" onChange={this.handleHotel}>
                        
                        
                        <option>&#128269;&nbsp;&nbsp;SELECT HOTEL</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
               </div>
           </div>
        )
    }

    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())  //reslove promise
        .then((data) => {this.setState({location:data})})  //recive data from promise of above step
        .catch((err) => {console.log(err)})
    }
    
}

export default withRouter(Search);