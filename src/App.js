import React,{useState} from "react";
import "./styles.css";
// import { useState } from "react";

const movies = {
  Horror: [
    { name: "The Scielence", 
    year: "2019" },
    { name: "Area 51", 
    year: "2015" },
    {
      name:"Therapy",
      year:"2016"
    }
  ],

  fantasy: [
    {
      name: "Winter Thaw",
      year: "2016"
    },
    {
      name: "The Great Wall",
      year: "2016"
    },
    {
      name:"The Wolfman",
      year:"2010"
    }
  ],
  comedy: [
    {
      name: "The Mexican",
      year: "2001"
    },
    {
      name: "Free Guy",
      year: "2021"
    },
    {
      name:"Fatherhood",
      year:"2021"
    }
  ],
  action:[
    {
      name:"Transporter",
      year:"2002"
    },
    {
      name:"Extortion",
      year:"2017"
    },
    {
      name:"Fight Club",
      year:"1999"
    }
  ],

};

export default function App() {
  const [selectedGenre, setGenre] = useState("comedy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}> Movies.Hub </h1>
      <p style={{ fontSize: "larger",textAlign:"center" }}>
        Checkout my favorite movies and I hope you like it
      </p>

      <div>
        {Object.keys(movies).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "skyblue",
              borderRadius: "0.6rem",
              padding: "0.7rem  1rem",
              border: "1px solid blue",
              margin: "1rem 1.4rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movies[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.year} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
