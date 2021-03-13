import React, {useState} from 'react';
import './About.css'
import DropDown from './DropDown'

const About = (type) => {

    const [isActive, setIsActive] = useState("");
    const onClick = () => setIsActive(!isActive);
    return (
        <div>
                <button  onClick={onClick} className="AboutButton">
                    <span>About this App</span>
                </button>
            <nav className={`abmenu ${isActive ? 'active' : 'inactive'}`}>
                <h2>Welcome to NYT Books!</h2>
                <p> Looking for a new read? 
                    Select a category using the drop-down menu and click on a title for more details!
                    This app displays the latest best-sellers from the New York Times and is updated periodically, so check back!</p>
            </nav>
        </div>
    );
}

export default About;