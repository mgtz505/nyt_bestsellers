import React, {useState}  from 'react';
import DropDown from './DropDown'
import About from './About'
import './NavBar.css'

const NavBar = () => {

    // const [type, setType] = useState("")
    // const selectType = (event) => setType(event.target.innerText)

    
    return (
        <div>
            
            <div className="NavBar">
                <div className="TitleIcon">
                    <h1>NYT BOOKS</h1>
                </div>
                    <About/>
                </div> 
        </div>
        );

};

export default NavBar;