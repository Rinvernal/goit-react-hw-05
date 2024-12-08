import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast, getImageUrl } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([])
  useEffect(()=>{
    const getData = async() => {
      const data = await fetchMovieCast(movieId);
      setActors(data)
    }
    getData()
  },[movieId])

  if (actors.length === 0) return <p>No cast information available.</p>;
  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              src={actor.profile_path ? getImageUrl(actor.profile_path) : ""}
              alt={actor.name}
              width="100px"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieCast