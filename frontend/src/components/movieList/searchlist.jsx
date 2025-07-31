import { useEffect, useState } from "react"
import "./movieList.css"
import { useSearchParams } from "react-router";
import Cards from "../card/card"
import axios from "axios"
import SearchBlock from "../../components/search/searchBlock";


const SearchList = () => {
    const [movieList, setMovieList] = useState([])
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/search/${query}`)
        .then(function (response) {
            setMovieList(response.data.results);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [query]);


    return (
    <>
        <SearchBlock />
        <div className="movie__list">
            <h2 className="list__title">SEARCH RESULTS</h2>
            {movieList.length > 0 ? (
                <div className="list__cards">
                    {
                        movieList.map(movie => (
                            <Cards key={movie.id} movie={movie} />
                        ))
                    }
                </div>
            ) : (
                <div className="noresult">
                    <p>No results found.</p>
                </div>
            )}
        </div>
    </>
    )
}

export default SearchList