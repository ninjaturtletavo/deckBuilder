import React from "react";

// importing CSS
import "./SearchResults.css";

// importing Card
import Card from "./Card";

// Displays search results and all key/values
const SearchResults = ({ results, addCardToDeck, removeCardFromDeck }) => {
  return (
    <div id="results">
      <h3>Here's what we found ({results.length} results):</h3>
      <div className="CardList">
        {results.map((result) => (
          <Card
            key={result.id}
            addCardToDeck={addCardToDeck}
            removeCardFromDeck={removeCardFromDeck}
            {...result}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
