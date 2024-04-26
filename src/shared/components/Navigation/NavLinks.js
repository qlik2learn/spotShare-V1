import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './NavLinks.css';
import {AuthContext} from '../../context/context-auth'
const NavLinks = props => {
    const auth =  useContext(AuthContext);
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>ALL USERS</NavLink> 
            </li>
            {auth.isLoggedIn && (<li>
                <NavLink to="/u1/places">MY PLACES</NavLink> 
            </li>)}
            {auth.isLoggedIn && (<li>
                <NavLink to="/places/new">ADD PLACES</NavLink> 
            </li>)}
            {!auth.isLoggedIn && (<li>
                <NavLink to="/auth">AUTHENTICATE</NavLink> 
            </li>)}
            {auth.isLoggedIn && <button onClick={auth.logout}>LOGOUT</button>}
        </ul>
    ) ;
};

export default NavLinks;