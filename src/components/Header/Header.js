import React from 'react'
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import Header from "H:\react-project\E-Shop\amazon\src\components\Header\Header.css";
function Header() {
  return (
    
        <div className="header">
        <div className="header-logo">
        <StorefrontIcon className="header-logo-image" fontSize="Large" />
        <h2 className="header-logo-title"> Amazon</h2>
      </div>
      <div className="header_search">
        <input type="text" className="header-searchInput" />
        <SearchIcon/>
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemone">Hello Guest</span>
          <span className="nav_itemtwo">Sign in</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemone">Your</span>
          <span className="nav_itemtwo">Shop</span>
        </div>
        <div className="nav_item">
          <ShoppingBasketIcon/>
          <span className="nav_itemtwo navBasket_item">0</span>
        </div>
      </div>


        </div>
    
  )
}

export default Header