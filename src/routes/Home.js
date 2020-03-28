import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () =>{
    const {
      data:{
        data: {movies}
      }
    } = await axios.get("http://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading : false})
  }

  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {this.state.isLoading ? (
          <div className="lodaer">
            <span className="loader_text">"JSON Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id} 
                year={movie.year}
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
          )}
      </section>
    );
  }
}


export default Home;
