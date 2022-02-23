import React,{Component} from 'react';
import axios from 'axios';
import Listingdisplay from './Listingdisplay';
import Roomfilter from '../Filters/Roomfilter';
import Costfilter from '../Filters/Costfilter';
import Suggestionblock from './Suggestionlogic'
import Weatherblock from './Weatherlogic';

const url = "https://developershardul23.herokuapp.com/hotellist/"

var limit= 2;

class Listingapi extends Component {
    constructor(props){
        super()

        this.state={
            hoteldata:'',
            //error:'',
            activePage: 1,
            totalNoOfItems: 1
        }
    }

    setDataAsPerFilter(sortedata){
        this.setState({hoteldata:sortedata})
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-lg-2 filters">
                        <Roomfilter roompertype={(data) => {this.setDataAsPerFilter(data)}} />
                        <Costfilter costpertype={(data) => {this.setDataAsPerFilter(data)}} />
                    </div>
                    <div className="col-md-10 col-lg-10 ">
                        <Weatherblock></Weatherblock>
                        <Suggestionblock></Suggestionblock>

                        <Listingdisplay hotellist={this.state.hoteldata} activePage={this.state.activePage} limit={limit} totalNoOfItems={this.state.totalNoOfItems}
                        pageNumber={(data) => {this.setState({activePage:data})}} />
                    </div>
                </div>
            </div>

        )
    }

    componentDidMount(){
        var tripid  = this.props.match.params.id;
        sessionStorage.setItem('tripid',tripid);
        //axios.get(`${url}${tripid}`)
        //.then((response) => { this.setState({hoteldata:response.data})})
        //.catch(() => {this.setState({error:'Error While fetching data'})})


        fetch(`${url}${tripid}`)
       .then((res) => res.json())
       .then((data) =>  {this.setState({
            hoteldata: data.slice(0, data.length - 1),
            totalNoOfItems:data.length - 1
        })})
    }
}

export default Listingapi