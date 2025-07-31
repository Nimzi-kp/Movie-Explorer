import "./searchBlock.css"

const SearchBlock = () => {
    return (
        <form action="/search" className="search-block">
        <input type="text" name="query"/>
        <input type="submit" className="search-btn" value="SEARCH" />
    </form>
    )
}

export default SearchBlock
