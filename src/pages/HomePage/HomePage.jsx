import { useEffect, useState } from "react"
import { fetchMovies } from "../../services/api"
import MovieList from "../../components/MovieList/MovieList"

const HomePage = () => {
  useEffect(() => {
    document.title = "HomePage"
  }, [])
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    const getData = async() => {
      const data = await fetchMovies();
      setMovies(data)
    }
    getData()
  },[])
  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies}/>
    </div>
  )
}

export default HomePage