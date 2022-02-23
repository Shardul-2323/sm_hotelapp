import React from 'react';
import {Link} from 'react-router-dom';
import './Suggestiondisplay.css';

const Suggestiondisplay = (props) => {

    const renderList =({sudata}) => {
        if(sudata){
            return sudata.map((item) => {
                return(
                   
                         <div className='card col-md-2'>
                                <h3><Link to={`/details/${item._id}`}>{item.name}</Link></h3>
                                <img className='card-img-top' src={item.thumb}/>
                                <div className='card-body'>
                                    <h4 className='card-title'>{item.locality}</h4>
                                    <p className='card-text'>
                                        <p>Cost: {item.cost}</p>
                                    </p>
                                </div>
                        </div>
                )
            })
        }

    }
    return(
        <div className="container">
             <h3>Thinking about pocket.Here are the suggestions for you for the date {new Date().getDate()}</h3>
            <div className="row">
                {renderList(props)}
            </div>
            <hr/>
        </div>
    )
}

export default Suggestiondisplay;