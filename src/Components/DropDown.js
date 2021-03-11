import React, {useState} from 'react';
import './DropDown.css'

const DropDown = () => {
    /*Via tutorial from: https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks */

    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    
    const [type, setType] = useState("")
    const selectType = (event) => setType(event.target.innerText)
    console.log(type);

    return (
        <div className="DropDownMenuContainer">
                <button onClick={onClick} className="triggerButton">
                    <span>Select a Category</span>
                </button>
            <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li onClick={selectType}><a href="#">Hardcover Fiction</a></li>
                    <li onClick={selectType}><a href="#">Paperback Fiction</a></li>
                    <li onClick={selectType}><a href="#">Hardcover Non-Fiction</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default DropDown;
