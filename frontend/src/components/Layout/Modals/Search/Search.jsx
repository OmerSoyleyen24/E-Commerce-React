import "./Search.css"

const Search = ({ isSearchShow, setIsSearchShow }) => {
    return (
        <section id="modal-search" className={`${isSearchShow ? "show" : ""} `}>
            <div className="modal-wrapper">
                <h3 className="modal-title">Search for products</h3>
                <p className="modal-desc">Start typing to see products you are looking for</p>
                <form className="search-form">
                    <input type="text" placeholder="Search a product" />
                    <button>
                        <i className="bi bi-search"></i>
                    </button>
                </form>
                <div className="search-results">
                    <div className="search-heading">
                        <h3>RESULTS FROM PRODUCT</h3>
                    </div>
                    <div className="results">

                    </div>
                </div>
                <i className="bi bi-x-circle" id="close-search" onClick={() => { setIsSearchShow(false) }}></i>
            </div>
            <div className="modal-overlay" onClick={() => { setIsSearchShow(false) }}>
            </div>
        </section>
    )
}

export default Search