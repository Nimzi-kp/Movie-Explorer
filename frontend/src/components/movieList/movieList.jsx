import { useEffect, useState } from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import axios from "axios"
import SearchBlock from "../../components/search/searchBlock";


const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/movies/${type ? type : "upcoming"}`)
            .then(function (response) {
                setMovieList(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [type])


    return (
        <>
            <SearchBlock />
            <div className="movie__list">
                <h2 className="list__title">{(type ? type : "upcoming").toUpperCase()}</h2>
                <div className="list__cards">
                    {
                        movieList.map(movie => (
                            <Cards key={movie.id} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MovieList