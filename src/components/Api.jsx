import React, { useEffect, useRef } from "react";
import "./api.css";
import { MagnifyingGlass } from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Api({ movies, setMovies, search, setSearch, isLoading, setIsLoading, nonData }) {
  const searchRef = useRef(null)

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    searchRef.current.focus()
  }, [])
  
  return (<>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          ref={searchRef}
          // value={search}
          type="text"
          className="search-movie"
          placeholder="Search"
          />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    {
      isLoading ? <MagnifyingGlass visible={true}
      height="600px"
      width="100%"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor = '#c0efff'
      color = '#4158D0' s/> :
    
      <div className="search-div">
        <div>
          <div className="movies"> 
            {movies && movies.map((movie,i) => (
              <div key={i} className="movie-card">
                <div className="img-div">
                  <img src={movie.Poster} alt="" />
                </div>
                <FontAwesomeIcon icon={faHeart} className="icon" />
                <div className="movie-card-desc">
                  <p className="card-title">{movie.Title}</p>
                  <p>
                    <span className="year">{movie.Year}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    }
    {nonData && <p className="not-found">Not Found</p>}
</>);
}

export default Api;
