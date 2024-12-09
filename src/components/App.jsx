import { Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import { lazy, Suspense } from "react"
  const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
  const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
  const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
  const MovieCast = lazy(() => import('../components/MovieCast/MovieCast'));
  const MovieReviews = lazy(() => import('../components/MovieReviews/MovieReviews'));
const App = () => {
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