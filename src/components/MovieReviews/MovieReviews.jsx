import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([])
  const location = useLocation()
  useEffect(()=>{
    const getData = async() => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data.results || []);
    }
    getData()
  },[movieId])

  if (reviews.length === 0) {
    return <p>We don`t have any reviews for this movie.</p>
  };
  return (
    <div>
      <Link to={location.state}>Go back</Link>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p><strong>Author:</strong> {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieReviews