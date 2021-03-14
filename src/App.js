import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Results from "./Components/Results";
import ResultDetails from './Components/ResultDetails'
import DropDown from "./Components/DropDown";
import photo from "./img/nyt.png"
import library from "./img/library2med.png"


function App() {
  //Created an object to store values for my API & API key
  const searchOptions = {
    api: "https://api.nytimes.com/svc/books/v3/lists/current/",
    typeEnd: ".json?api-key=",
    key: process.env.REACT_APP_NYT_KEY,
  };
  // Define state for type (i.e. paperback, non-fiction) for use w/ dropdown menu
  const [type, setType] = useState("");

// Define state for books (object pulled in by API request)
  const [books, setBooks] = useState();

  //Establish an effect to call getBestSellers
  useEffect(() => {
    getBestSellers();
  }, [type]);

  // Set Type on selection of option in pulldown menu
  const selectType = (event) => setType(event.target.innerText);
//Manpulate the type string (innerText from dropdown) to be compatible w/ API pull format
  let selector = type.split(" ").join("-").toLowerCase();
  // console.log(selector);
  //Function to call the NYT API
  function getBestSellers() {
    const url =
      "https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=U3Z8243UGH2G8DQ0pcEYvTZrmpwQwTVz";
    const url2 = `${searchOptions.api}${selector}${searchOptions.typeEnd}${searchOptions.key}`;
    //Confirm that the URL2 is succsessfully rendering
    // console.log(url2)
    //Fetch protocol for API URL
    fetch(url2)
      .then((response) => response.json())
      .then((response) => {
        //Confirm that the correct list_name is being pulled from the API:
        // console.log(response)
        setBooks(response);
      })
      .catch(console.error);
  }

  return (
    <div className="App">
      <header className="NavBar">
        <NavBar  />
        <DropDown selectType={selectType} />
      </header>
      <main className="ResultsSection">
        {/* <Link to='/Components.ResultDetails'> */}
          <Results books={books} photo={photo} />
        {/* </Link> */}
        {/* <ResultDetails/> */}
      </main>
      {books ? 
            <img className="HomePhoto" src={library}/>

      : null}
    </div>
  );
}

export default App;
