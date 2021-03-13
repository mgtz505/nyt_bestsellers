import React, {useState} from 'react';
import './DropDown.css'

const DropDown = ( { selectType} ) => {
    /*Via tutorial from: https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks */

    //Define the state for the drop down menu 
    const [isActive, setIsActive] = useState(false);
    //Write the event identifier that sets the active state 
    const onClick = () => setIsActive(!isActive);
    
    //Set the State for the genre selection
    // const [type, setType] = useState("")
    // const selectType = (event) => setType(event.target.innerText)
    // console.log(type)
    
    

    return (
        <div className="DropDownMenuContainer">
                <button onClick={onClick} className="triggerButton">
                    <span>Select a Category</span>
                </button>
            <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li onClick={selectType}><a href="#">Hardcover Fiction</a></li>
                    <li onClick={selectType}><a href="#">Trade Fiction Paperback</a></li>
                    <li onClick={selectType}><a href="#">Hardcover NonFiction</a></li>
                    <li onClick={selectType}><a href="#">Paperback NonFiction</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default DropDown;
