import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import SearchList from './components/movieList/searchlist';

function App() {


  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="search" element={<SearchList />}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App
