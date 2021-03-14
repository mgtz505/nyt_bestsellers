import React, {useState, useEffect, useRef} from 'react';
import './DropDown.css'

const DropDown = ( { selectType} ) => {
    /*Via tutorial from: https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks */

    //Define the state for the drop down menu 
    const [isActive, setIsActive] = useState(false);
    //Write the event identifier that sets the active state 
    const onClick = () => setIsActive(!isActive);
    
    const dropDownRef = useRef(null);
    
    useEffect(() => {
        const pageClickEvent = (event) => {
            console.log(event)
            if(dropDownRef.current !== null && !dropDownRef.current.contains(event.target)){
                setIsActive(!isActive);
            }
        }
       if (isActive) {
           window.addEventListener('click', pageClickEvent);
       }
       return () => {
           window.removeEventListener('click', pageClickEvent);
        }
       
    }, [isActive]);

    return (
        <div className="DropDownMenuContainer">
                <button onClick={onClick} className="triggerButton">
                    <span>Select a Category</span>
                </button>
            <nav  ref={dropDownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li className="grow" onClick={selectType}><a href="#">Hardcover Fiction</a></li>
                    <li className="grow" onClick={selectType}><a href="#">Trade Fiction Paperback</a></li>
                    <li className="grow" onClick={selectType}><a href="#">Hardcover NonFiction</a></li>
                    <li className="grow" onClick={selectType}><a href="#">Paperback NonFiction</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default DropDown;
