import React from 'react';
import PropTypes from "prop-types";

function Movie({id, name, picture}){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const movieILike = [
  {
    id:1,
    name: "Titanic",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/RMS_Titanic_3.jpg/600px-RMS_Titanic_3.jpg",
    ratings:5.0
  },
  {
    id:2,
    name: "Harry Porter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/RMS_Titanic_3.jpg/600px-RMS_Titanic_3.jpg",
      ratings:5.0
  },
  {
    id:3,
    name: "Avatar",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/RMS_Titanic_3.jpg/600px-RMS_Titanic_3.jpg",
      ratings:5.0
  },
  {
    id:4,
    name: "Avengers",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/RMS_Titanic_3.jpg/600px-RMS_Titanic_3.jpg",
      ratings:5.0
  }
];

Movie.PropTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ratings: PropTypes.string.isRequired
}
function App() {
  return (
    <div>
      {movieILike.map(movie =>(
        <Movie key={movie.id} name={movie.name} picture={movie.image} /> 
        ))}
      </div>
  );
}

export default App;
