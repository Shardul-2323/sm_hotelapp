import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header';
import Footer from './Footer';
import Hoteldetails from './details/Hotelapi'
import Listingapi from './Listing/Listingapi'
import Placeorder from './Booking/Placebooking'
import Booking from './Booking/Bookingapi'


const Routing=()=>{
    return(
        <BrowserRouter>
            <div>
                                                                    
                
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/list/:id" component={Listingapi}/>
                <Route exact path="/details/:id" component={Hoteldetails}/>
                <Route path="/booking/:id" component={Placeorder}/>
                <Route path="/viewBooking" component={Booking}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default Routing;