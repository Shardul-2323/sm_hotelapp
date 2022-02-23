import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Hoteldisplay = (props) => {

    const renderHotel=({hoteldata})=>{
        if(hoteldata){
            return(
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>{hoteldata.name}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <button type="button" data-toggle="modal" data-target="#myModal" style={{backgroundColor:"white",boxShadow:"6px 6px 15px black"}}>
                                        <img className="img-responsive" src={hoteldata.thumb}
                                        style={{width:1500,height:400}}/>
                                    </button>
                                    <div id="myModal" className="modal fade" role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            <h4 className="modal-title">
                                                Image Gallery For {hoteldata.name}
                                            </h4>
                                        </div>
                                        <div className="modal-body">
                                        <div id="myCarousel" class="carousel slide" data-ride="carousel">

                                            <ol class="carousel-indicators">
                                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                            </ol>
                                            <div class="carousel-inner">
                                                <div class="item active">
                                                <img className="img-responsive" src={hoteldata.thumb}
                                            style={{width:1500,height:400}}/>
                                                </div>

                                                <div class="item">
                                                <img className="img-responsive" src={hoteldata.thumb}
                                            style={{width:1500,height:400}}/>
                                                </div>

                                                <div class="item">
                                                <img className="img-responsive" src={hoteldata.thumb}
                                            style={{width:1500,height:400}}/>
                                                </div>
                                            </div>
                                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                                <span class="glyphicon glyphicon-chevron-left"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                                <span class="glyphicon glyphicon-chevron-right"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                            </div>
                                        </div>
                                        
                                        </div>

                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h3>{hoteldata.name}</h3>
                                    <h3>{hoteldata.locality}</h3>
                                    <h3>{hoteldata.address}</h3>
                                </div>
                            </div>
                            <div className="">
                                <div className="row">
                                    <Tabs>
                                        <TabList>
                                            <Tab><h2>About</h2></Tab>
                                            <Tab><h2>Contact</h2></Tab>
                                        </TabList>
                                        <TabPanel>
                                        <h2>About This Place</h2>
                                        <p>{hoteldata.address}</p>
                                        <h3>Cost: Rs.{hoteldata.cost}</h3>
                                        </TabPanel>
                                        <TabPanel>
                                            
                                            <h2>Contact Us</h2>
                                            <h3>Phone:7887399393</h3>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                                <div className="row">
                                    <Link to={`/list/${sessionStorage.getItem('tripid')}`} className="btn btn-danger rotate">Back</Link>&nbsp;&nbsp;&nbsp;
                                    <Link to={`/booking/${hoteldata._id}`} className="btn btn-success rotate">Place Order</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            )

        }else{
            return(
                <div>
                    <img src="/images/loader.gif"></img>
                </div>
            )
        }
            
        
        
}
    
    return(
        <React.Fragment>
            {renderHotel(props)}
        </React.Fragment>
    )
}

export default Hoteldisplay;