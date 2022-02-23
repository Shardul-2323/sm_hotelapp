import React from 'react';
import './Quicksearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {
    const listTrip = ({tripdata}) => {
        if(tripdata){
            return tripdata.map((item) => {
                return(
                    <Link to={`/list/${item.trip}`}>
                        <div className="tileContainer" >
                            <div className="tileComponent1">
                                <img src={`/images/${item.name}.jpg`} className="imageclass"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start Your {item.name} Trip with us
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <div className="container">
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    QuickSearch
                </p>
                <p className="quickSearchSubHeading">
                    Discover Trip By Type
                </p>
                <br/>
                {listTrip(props)}
            </div>
        </div>
    )
}

export default QuickDisplay;