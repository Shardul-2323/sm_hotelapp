import React,{Component} from 'react';
import axios from 'axios';
import Weatherdisplay from './Weatherdisplay';

let url="https://developershardul23.herokuapp.com/hotels?city="

class Weatherblock extends Component {
    constructor(){
        super()

        this.state={
            Weather:''
        }
    }

    render(){
        return(
            <div>
                <Weatherdisplay sudata={this.state.Weather}/>
            </div>
        )
    }
    

    componentDidMount(){
        let x;
        var location='Kolhapur'
        var murl=`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
        console.log(murl)
        //call the api
        fetch(murl,{method:'GET'})
        //resolve the data
        .then((response) => response.json())
        //use the data
        .then((data) => {
            var result = data.list[0].temp.day;
            sessionStorage.setItem('x',result)
            console.log("myresult>>>>>",result)
        })
        
        //sessionStorage.setItem('currentWeather',x)
        let weather = sessionStorage.getItem('x')
        weather = Number(weather)
        console.log("weather>>>",weather)
        let surl
        if(weather > 30){
            surl = `${url}6`
        }else{
            surl = `${url}5`
        }
        console.log("surl",surl)
        axios.get(`${surl}`)
        .then((response) => {this.setState({Weather:response.data})})
    }
}


export default Weatherblock;