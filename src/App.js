import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Results from './Components/Results'

function App() {
  //Object to Sort & Contain all API Query Criteria

// key: process.env.REACT_APP_NYT_KEY,
const searchOptions = {
    api: "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=",
    key: "U3Z8243UGH2G8DQ0pcEYvTZrmpwQwTVz",
  }
console.log()
const [books, setBooks] = useState()

useEffect(() => {
  getBestSellers();
}, [])

  //Function to Call the NYT API
  function getBestSellers(){
    const url= `${searchOptions.api}${searchOptions.key}`;
    console.log(url)
    
    fetch(url)
    .then(response => response.json())
    .then (response => {
      // console.log(response)
      setBooks(response);
    })
    .catch(console.error)
  }
console.log(books)

  return (
    <div className="App">
      <header className="NavBar">
        <NavBar/>
      </header>
      <main className="ResultsSection">
        <Results books={books}/>
      </main>
    </div>
  );
}

export default App;
