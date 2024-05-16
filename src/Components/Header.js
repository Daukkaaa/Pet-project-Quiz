import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>Quiz about React</Link>
            <Link to='/card2'>Quiz about JavaScript</Link>
            <Link to='/card3'>Quiz about HTML</Link>
        </div>
    )
}



export default Header;


