import { useEffect, useState } from 'react';
import Api from './components/Api';
import "./app.css"


function App() {
  const [movies, setMovies] = useState([]);
  const [search,setSearch] = useState('fast');
  const [isLoading, setIsLoading] = useState(true);
  const [nonData, setNonData] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [showWishlist, setshowWishlist] = useState(false);

  const fetchs = () => {
    setIsLoading(true)
    setNonData(false)
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=678bc548`)
    .then((res)=>res.json())
    .then((res)=>{
      setIsLoading(false)
      setMovies(res.Search)
      if(res.Search === undefined) {
        setNonData(true)
      }
    })
    .catch((err)=>console.log("err", err))

    if(search.length === 0) {
      setSearch("fast")
    }
  }

  useEffect(()=>{
    fetchs()
  },[search])

  return (
    <div className="App">
      <Api 
      nonData={nonData} 
      isLoading={isLoading} 
      setIsLoading={setIsLoading} 
      movies={movies} 
      setMovies={setMovies} 
      search={search} 
      setSearch={setSearch} 
      wishlist={wishlist}
      setWishlist={setWishlist}
      showWishlist={showWishlist}
      setshowWishlist={setshowWishlist}
      />
    </div>
  );
}

export default App;
