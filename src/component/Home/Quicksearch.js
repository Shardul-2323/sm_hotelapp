import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';

const QuickUrl = "https://developershardul23.herokuapp.com/booking";

class Quicksearch extends Component {
    constructor(){
        super()

        this.state={
            triptype:''
        }
    }

    render(){
       return(
            <div>
                <QuickDisplay tripdata={this.state.triptype}/>
            </div>
        )
    }
    
    componentDidMount(){
        fetch(QuickUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({triptype:data})
        });
    }
}

export default Quicksearch;