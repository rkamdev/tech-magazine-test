import React from "react";
import "./styles/header.scss";
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header(){
  return(
    <header>
      <nav className="navbar">
        <div className="container">
          <ul>
            <li>
              <a href="#"><MenuIcon />Katalog</a>
            </li>
            <li>
              <a href="#"><input placeholder="Search" required /><SearchOutlinedIcon style={{ marginLeft: '-32px' , display: 'fixed' }} /></a>
            </li>
            <div className="dropdown">
              <a href="#" className="dropdown-toggler"><TranslateOutlinedIcon />Til</a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Qaraqalpaq</li>
                <li className="dropdown-item">O'zbek</li>
                <li className="dropdown-item">Rus</li>
              </ul>
            </div>
            <li>
              <a href="#"><PersonOutlineOutlinedIcon />Kabinet</a>
            </li>
            <li>
              <a href="#"><ShoppingCartOutlinedIcon />Savatcha</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;