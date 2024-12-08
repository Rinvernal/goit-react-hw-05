import { Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import MovieCast from "./MovieCast/MovieCast"
import MovieReviews from "./MovieReviews/MovieReviews"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import { lazy, Suspense } from "react"

const App = () => {
  const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
  const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
  const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
  return (
    <div>
      <Header/>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/movies" element={<MoviesPage/>}/>
          <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
            <Route path="cast" element={<MovieCast/>}/>
            <Route path="reviews" element={<MovieReviews/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Suspense>
      

    </div>
  )
}

export default App