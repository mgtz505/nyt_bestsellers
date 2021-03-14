import React from 'react';
import './ResultDetails.css'

const ResultDetails = ( {bookArray, pick} ) => {
    // console.log("from result details")
    console.log(bookArray)
    console.log(pick)
let selection = bookArray.find(selection => selection.title ===pick)
console.log(selection)
   
return (
    <div className="ResultDetailContainer">
            {selection ?
            <div className="ConditionalRender">
                <div className="ImageResult">
                    <img src={selection.book_image} alt={selection.image}/>
                </div>
                <div className="TextResult">
                    <div className="BookTitle">
                    <h2>{selection.title}</h2>
                    </div>
                    <div className="BookAuthor">
                        <h2>By {selection.author}</h2>
                        <h2>Published by {selection.publisher}</h2>
                    </div>
                    <div className="BookRankInfo">
                        <h2>Currently ranked #{selection.rank} on the NYT Best Sellers List
                        and has been present on the list for the past {selection.weeks_on_list} weeks.</h2>
                    </div>
                    <div className="BookDescription">
                        <h2>Description: {selection.description}</h2>
                    </div>
                    <div className="BookReviewLink">
                        <h2>The NYT's review: </h2>
                        <h2> {selection.book_review_link}</h2>
                        <a target="_blank" href={selection.book_review_link.value} rel="noopener noreferrer" />
                    </div>
                    <div className="AMZN_Link">
                        <h2>Purchase on Amazon (but support a local bookseller if you can!):</h2>
                        <a href={selection.amazon_product_url}/>
                    </div>
                </div>
            </div>
            : null}
            
        </div>
    );
};

//https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript

export default ResultDetails;