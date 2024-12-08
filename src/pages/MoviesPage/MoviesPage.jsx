import { Field, Form, Formik } from "formik"
import { useState } from "react";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [error, setError] = useState(null); 
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); 
  
  const initialValues = {
    query: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const query = values.query.trim();
    if (!query) {
      alert("Please enter a valid search query.");
      return;
    }

    try {
      setError(null);
      setHasSearched(true);
      const results = await searchMovies(query);
      setMovies(results);
      resetForm();
    } catch (error) {
      console.error("Error", error);
      setError("Something went wrong. Please try again later.");
    }
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {hasSearched && movies.length > 0 && (
        <MovieList movies={movies}/>
      )}

      {hasSearched && movies.length === 0 && !error && (
        <p>No movies found. Try a different query!</p>
      )}
    </div>
  );
};

export default MoviesPage;