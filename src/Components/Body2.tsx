import React from 'react';
// import {Grid,Button} from "@material-ui/core";
// import {makeStyles} from "@material-ui/core/styles";
// import Sidebar from './Sidebar';
import { Route, Switch} from 'react-router-dom';
import Home from './Home';
// import Results from './Results';
import Footer from './Footer';
import Login from './Login';
import Registration from './Registration';
import ShoppingCart from './Shoppingcart';
import WishList from './Wishlist';
import MyProfile from './MyProfile';
import Dashboard from './UserDashboard';
import ProductList from './ProductList';
import UnlockPremium from './UnlockPremium';
import BrandList from './BrandList';
import ProductItem from './ProductItem';
import Carousel from './Carousel';
import Helpsupport from './Helpsupport';
// import Navbar from './Navbar';
import Chatbot from './chatbot';

export default function Body(props) {
    
    return (
        // <Grid container className={classes.root}> 
        //     {/* <Grid item xs={3} className={classes.item1} container><Sidebar/></Grid> */}
        //     <Grid item lg={12} className={classes.item2} container>
                 <Switch>
                    <Route exact path="/" component={Home}/>
                    {/* <Route path="/navbar" component={Navbar} />  */}
                    <Route path="/footer" component={Footer} />
                    <Route path="/login" render={()=><Login {...props}/>}/>
                    <Route path="/registration" component={Registration} />
                    <Route path="/shoppingcart" component={ShoppingCart} />
                    <Route path="/wishlist" component={WishList} />
                    <Route path="/myprofile" component={MyProfile} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/productlist" component={ProductList} />
                    <Route path="/unlockpremium" component={UnlockPremium} />
                    <Route path="/brandlist" component={BrandList} />
                    <Route path="/product" component={ProductItem} />
                    <Route path="/example" component={Carousel}/> 
                    <Route path="/helpsupport" component={Helpsupport} />
                    <Route path="/carousel" component={Carousel} />
                    <Route path="/chatbot" component={Chatbot} />
                    
                    {/* <Route exact path="/result" component={Results}/>
                    <Route exact path="/login" component={Home}/> */}
                </Switch>   
        //     </Grid>
        // </Grid>
    )
}
