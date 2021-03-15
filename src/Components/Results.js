import React, { useState, useEffect } from "react";
import "./Results.css";
import ResultDetails from "./ResultDetails";

const Results = ({ books, photo }) => {
  //Set the state for the book array that will be mapped on the component
  const [bookArray, setBookArray] = useState([]);
  useEffect(() => {
    setBookArray(books?.results.books);
  }, [books]);

  const [pick, setPick] = useState();
  const selectPick = (event) => setPick(event.target.alt);

  return (
    <div>
      {bookArray ? (
        <div className="CriteriaHeader">
          <div className="ResultMap">
            <div
              className="ResultChild"
              style={{ backgroundImage: `url(${photo})` }}
            >
              {bookArray.map((item, i) => (
                <div>
                  <div className="Result grow" key={i}>
                    <img
                      className="ResultImage"
                      src={item.book_image}
                      alt={item.title}
                      onClick={selectPick}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <ResultDetails bookArray={bookArray} pick={pick} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Results;
