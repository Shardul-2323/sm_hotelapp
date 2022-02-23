import React from 'react';
import {Link} from 'react-router-dom';
import './Listing.css';
import Pagination from "react-js-pagination";


const renderList = (props,data) => {
    console.log("shardul1>>>>",data);
    if(data){
        console.log("shardul>>>>",data);
        var limit = props.limit;
        var page = props.activePage;
        data = data.slice((page - 1) * limit, (page - 1) * limit + limit);
        return data.map((item) => {
            return(
                
               <div className="Item" key={item._id}>
                   <div className="row">
                       <div className="col-sm-6">
                           <img className="image" src={item.thumb}/>
                       </div>
                       <div className="col-sm-6">
                           <div className="hotel_name">
                               <Link to={`/details/${item._id}`}>{item.name}</Link>
                               
                               <div className="city_name">{item.city_name}</div>
                               <div className="address-text">{item.locality}</div>
                               <div className="address-text">{item.address}</div>
                           </div>
                       </div>
                   </div>
                   <hr/>
                   <div class="row">
                            <div class="col-sm-3">
                                <div class="CUISINES-COST-FOR-TWO">Room Type</div>
                                <div class="CUISINES-COST-FOR-TWO">COST FOR Night</div>
                            </div>
                            <div class="col-sm-9">
                                <div class="Bakery-700">
                                    {item.type[0].name},{item.type[1].name},{item.type[2].name}</div>
                                <div class="Bakery-700">Rs {item.cost}</div>
                            </div>
                    </div>
               </div>

            )
        })
    }else{
        return(
            <div className="item">
                <div className="row row-height">
                    <div className="col-sm-3">
                        <img src="/images/loader.gif"/>
                    </div>
                </div>
            </div>
        )
    }
}
const handlePageChange = (props, pageNumber) => {
    props.pageNumber(pageNumber);
    var data = props.hotellist;
    console.log("data",data)
    renderList(props, data);
}

const Listingdisplay = (props) => {

    
   
    return(
        <div className="">
            <div className="row">
                    <div className="col-md-12 col-lg-12">
                        {renderList(props,props.hotellist)}
                    </div>
                    <center className="">
                        <Pagination
                            activePage={props.activePage}
                            itemsCountPerPage={props.limit}
                            totalItemsCount={props.totalNoOfItems}
                            pageRangeDisplayed={5}
                            onChange={(pageNumber) => {handlePageChange(props,pageNumber)}}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </center>
            </div>
        </div>
    )
}

export default Listingdisplay;