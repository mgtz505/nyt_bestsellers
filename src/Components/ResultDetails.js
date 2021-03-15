import React from "react";
import "./ResultDetails.css";

const ResultDetails = ({ bookArray, pick }) => {
  //Locate the selected book in the returned array
  let selection = bookArray.find((selection) => selection.title === pick);

  return (
    <div className="ResultDetailContainer">
      {selection ? (
        <div className="ConditionalRender">
          <div className="ImageResult">
            <img src={selection.book_image} alt={selection.image} />
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
              <h2>
                Currently ranked #{selection.rank} on the NYT Best Sellers List
                and has been present on the list for the past{" "}
                {selection.weeks_on_list} weeks.
              </h2>
            </div>
            <div className="BookDescription">
              <h2>{selection.description}</h2>
            </div>

            <div className="BuyLinks">
              <h2>
                Purchase online{" "}
                <span className="Emphasis">
                  (but hey, support a local bookseller if you can!){" "}
                </span>
              </h2>
              <a className="grow" href={selection.buy_links[0].url}>
                Purchase from {selection.buy_links[0].name}
              </a>
              <a className="grow" href={selection.buy_links[1].url}>
                Purchase from {selection.buy_links[1].name}
              </a>
              <a className="grow" href={selection.buy_links[2].url}>
                Purchase from {selection.buy_links[2].name}
              </a>
              <a className="grow" href={selection.buy_links[3].url}>
                Purchase from {selection.buy_links[3].name}
              </a>
              <a className="grow" href={selection.buy_links[4].url}>
                Purchase from {selection.buy_links[4].name}
              </a>
              <a className="grow" href={selection.buy_links[5].url}>
                Purchase from {selection.buy_links[5].name}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

//https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript

export default ResultDetails;
