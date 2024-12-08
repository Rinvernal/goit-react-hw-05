import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchMovieDetails, getImageUrl } from "../../services/api";
import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null)
  const location = useLocation()
  useEffect(()=>{
    const getData = async() => {
      const data = await fetchMovieDetails(movieId);
      setDetails(data)
    }
    getData()
  },[movieId])

  if (!details) return <p>Loading...</p>;
  return (
    <div>
      <Link to={location.state}>Go back</Link>
      <h2>{details.title}</h2>
      <img src={details.poster_path ? getImageUrl(details.poster_path) : ""}
        alt={details.title} width="200px"/>
      <p>Status: {details.status}</p>
      <p>Popularity: {details.popularity}</p>
      <div>
        <h2>Additional info:</h2>
        <nav>
          <ul>
            <li><NavLink to="cast" state={location.state}>Cast</NavLink></li>
            <li><NavLink to="reviews" state={location.state}>Reviews</NavLink></li>
          </ul>
        <Outlet/>
      </nav>
      </div>
      
    </div>
  )
}

export default MovieDetailsPage