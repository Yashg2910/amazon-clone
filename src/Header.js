import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {

    const [{basket, user}] = useStateValue();

    const handleAuthentication = () => {
        if (user){
            auth.signOut();
        }else{

        }
    }
    return (
        <div className="header">
            
            <Link to="/">
                <img className="header__logo" src="https://www.nicepng.com/png/full/228-2281836_vault-logo-available-amazon-app-store.png" 
                alt="logo"/>
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type=""text/>
                <SearchIcon className="header__searchIcon" />
                {/* Logo */}
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}!</span>

                        <span className="header__optionLineTwo">{user? 'Sign Out': 'Sign In'}</span>
                    </div>
                </Link>
                
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>
                
                <div className="header__option">
                    <span className="header__optionLineTwo">Your Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__baskedCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
