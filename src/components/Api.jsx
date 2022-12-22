import React, { useEffect, useRef } from "react";
import "./api.css";
import { MagnifyingGlass } from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Api({ movies, setSearch, isLoading, nonData, wishlist, setWishlist, showWishlist, setshowWishlist}) {
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

  const getHeart = (item) => {
    setWishlist(() => {
        if (wishlist.includes(item)) {
            return wishlist.filter(q => q !== item)
        } else {
            return [...wishlist, item]
        }
    })
}
  const showFavorites = () => {
    setshowWishlist(!showWishlist);
  }
  return (<>
      <div>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            ref={searchRef}
            // value={search}
            type="text"
            className="search-movie"
            placeholder="Search"
            />
        </form>
        <div className="fav-div"><button className="fav" onClick={showFavorites}>{showWishlist ? "Movies" : "Favorites"} <span>{wishlist.length}</span></button></div>
      </div>
    {
      isLoading ? <MagnifyingGlass visible={true}
      height="600px"
      width="100%"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor = '#c0efff'
      color = '#4158D0'/> :
      
      <div className="search-div">
        <div>
          <div className="movies"> 
            {!showWishlist ? movies &&  movies.map((movie,i) => (
              <div key={i} className="movie-card">
                <div className="img-div">
                  <img src={movie.Poster} alt="" />
                </div>
                <FontAwesomeIcon icon={faHeart} className="icon" onClick={() => getHeart(movie)}/>
                <div className="movie-card-desc">
                  <p className="card-title">{movie.Title}</p>
                  <p>
                    <span className="year">{movie.Year}</span>
                  </p>
                </div>
              </div>
            ))
            : wishlist?.length ? wishlist?.map ((movie, i)=> (
              <div key={i} className="movie-card">
                <div className="img-div">
                  <img src={movie.Poster} alt="" />
                </div>
                <FontAwesomeIcon icon={faHeart} className="icon" onClick={() => getHeart(movie)}/>
                <div className="movie-card-desc">
                  <p className="card-title">{movie.Title}</p>
                  <p>
                    <span className="year">{movie.Year}</span>
                  </p>
                </div>
              </div>
            )) : <p className="not-found">Not Found</p>
          }
          </div>
        </div>
      </div>
    }
    {nonData && <p className="not-found">Not Found</p>}
</>);
}

export default Api;
