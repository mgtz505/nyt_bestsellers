import React from 'react';
import DropDown from './DropDown'
import About from './About'
import './NavBar.css'

const NavBar = (type) => {
console.log(type)

    
    return (
        <div className="NavBar">
            <div className="TitleIcon">
                <h1>NYT BOOKS</h1>
            </div>
                <About/>
            <div className="DropDownContainer">
                <DropDown className="DropDown"/>
            </div>
        </div>
    );
};

export default NavBar;