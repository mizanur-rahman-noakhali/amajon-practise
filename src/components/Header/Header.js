import React, { useContext } from 'react';
import logo from '/web developement/projects/amajon-practise/src/images/logo.png'
import '../Header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { UserContext } from '../../App';
const Header = () => {

  const [loggedInUser,setLoggedInUser]= useContext(UserContext);
  return (
    <div class='header'>
      
      <img src={logo} alt="" />
        <nav>
           <a href="/shop">Shop
          </a><a href="/review">Review
          </a><a href="/inventory">Manage Inventory</a> 
          {/* <Link to='/shop'>shop</Link>
          <Link to='/review'>Review</Link>
          <Link to='/inventory'>Manage Inventory</Link> */}
          <button onClick={()=> setLoggedInUser({})}>SignOut</button>
        </nav>
    </div>
  );
};

export default Header;