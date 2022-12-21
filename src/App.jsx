import { useEffect, useState } from 'react';
import Api from './components/Api';
import "./app.css"


function App() {
  const [movies, setMovies] = useState([])
  const [search,setSearch] = useState('fast')
  const [isLoading, setIsLoading] = useState(true)
  const [nonData, setNonData] = useState(false)

  const fetchs = () => {
    setIsLoading(true)
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=678bc548`)
    .then((res)=>res.json())
    .then((res)=>{
      setIsLoading(false)
      // console.log(res.Search == undefined)
      if(res.Search === undefined) {
        setNonData(true)
      }
      setMovies(res.Search)
    })
    .catch(err=>console.log("err", err))

    if(search.length === 0) {
      setSearch("fast")
    }
  }

  useEffect(()=>{
    fetchs()
  },[search])

  return (
    <div className="App">
      <Api nonData={nonData} isLoading={isLoading} setIsLoading={setIsLoading} movies={movies} setMovies={setMovies} search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
