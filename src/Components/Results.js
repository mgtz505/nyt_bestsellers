import React, {useState} from 'react';
import './Results.css'
const Results = (books) => {
    console.log(books)
    // console.log(books.books.results.bestsellers_date)
    // console.log("Book Title Path", books.books.results.books[0].title)
    // console.log("Book Author Path", books.books.results.books[0].author)
    // console.log("Book Image Path", books.books.results.books[0].book_image)
    // console.log("Book Description Path", books.books.results.books[0].description)
    // console.log("Book AMZN Path", books.books.results.books[0].amazon_product_url)
let bookArray = books.books.results.books;
// console.log("bookArray:", bookArray)

    return (
        <div>
        {books ? 
            <div className="CriteriaHeader">
                <h1 className="CriteriaBanner">NYT Best Sellers, {books.books.results.list_name} as of {books.books.results.bestsellers_date}</h1>
                <div className="ResultMap">
                    <div className="ResultChild">
                        {(bookArray).map((item, i) => (
                            <div>
                                    <div className="Result" key={i}>
                                        <img className="ResultImage" src={bookArray[i].book_image} />
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