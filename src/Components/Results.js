import React, {useState, useEffect} from 'react';
import './Results.css'
import ResultDetails from './ResultDetails';



const Results = ({ books, photo }) => {
   //Ensure that books prop is being destructued and pulled into Results.js properly
    // console.log(books)
    
    //Set the state for the book array that will be mapped on the component
    const [bookArray, setBookArray] = useState([]);
    useEffect(() => {
        //? after books if they disappear 
        setBookArray(books?.results.books);
    }, [books])

const [pick, setPick] = useState()  
const selectPick = (event) => setPick(event.target.alt);
console.log(pick)

// console.log(bookArray);
    return (
        <div>
        {bookArray ? 
            <div className="CriteriaHeader">
                {/* <h1 className="CriteriaBanner">Displaying Best-Selling {books.results.list_name}</h1> */}
                <div className="ResultMap" >
                    <div 
                    className="ResultChild" 
                    style={{ backgroundImage: `url(${photo})` }}>
                        {bookArray.map((item, i) => (
                            <div>
                                {/* <Link to={`./Component/ResultDetails/${item.id}`} id={item.title}> */}
                                    <div className="Result grow" key={i}>
                                        <img className="ResultImage" 
                                        src={item.book_image} 
                                        alt={item.title}
                                        onClick={selectPick}/>
                                        {/* <h2>{item.title}</h2> */}
                                    </div>
                                {/* </Link> */}
                            </div>
                        ))
                        }    
                    </div>  
                    <div>
                        <ResultDetails bookArray={bookArray} pick={pick} />
                    </div>
                </div>  
            </div>
                    : null}

        </div>              
    );
};

    

export default Results;