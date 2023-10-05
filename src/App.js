import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
export const UserContext = createContext ();

function App(props) {

const [loggedInUser,setLoggedInUser] = useState ({});

  return (
    <UserContext.Provider value= {[loggedInUser,setLoggedInUser]}>
      <h3> email {loggedInUser.email}</h3>
     
      <Router>
      <Header></Header>
        <Switch>
          <Route path='/shop'>
          <Shop></Shop> 
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <PrivateRoute path='/Shipment'>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path='/Login'>
            <Login></Login>
          </Route>
          <Route exact path='/'>
           <Shop></Shop>
          </Route>
          <Route path='/product/:productKey'>
          <ProductDetail></ProductDetail>
          </Route>
          <Route path='*'>
             <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    
    
    </UserContext.Provider>
  );
}

export default App;
