import React from "react";
import "../styles.css";
import {Link} from "react-router-dom";
function Header()
{
    return (

            <header className="header"><Link to="/note" >Keeper</Link></header>
    );
}
export default Header;
