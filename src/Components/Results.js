import React, {useState, useEffect} from 'react';
import './Results.css'
const Results = ({ books }) => {
   //Ensure that books prop is being destructued and pulled into Results.js properly
    // console.log(books)
    
    //Set the state for the book array that will be mapped on the component
    const [bookArray, setBookArray] = useState([]);
    useEffect(() => {
        //? after books if they disappear 
        setBookArray(books?.results.books);
    }, [books])
console.log(bookArray);
    return (
        <div>
        {bookArray ? 
            <div className="CriteriaHeader">
                {/* <h1 className="CriteriaBanner">Displaying Best-Selling {books.results.list_name}</h1> */}
                <div className="ResultMap" >
                    <div className="ResultChild">
                        {bookArray.map((item, i) => (
                            <div>
                                    <div className="Result" key={i}>
                                        <img className="ResultImage" src={item.book_image} />
                                    </div>
                            </div>
                
                        ))
                        }    
                    </div>  
                    
                </div>  
            </div>
                    : null}
        </div>              
    );
};

export default Results;