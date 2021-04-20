import React from "react";
import "./style.css";

function Search () {
    return (
        <form className='input-group searchbar'>
            <select className="form-select" aria-label="Select Search by">
                <option defaultValue>Search by</option>
                <option value="last-name">Last Name</option>
                <option value="first-name">First Name</option>
                <option value="city">City</option>
            </select>
            <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn btn-search"><i className="fas fa-search"></i></button>
        </form>
    );
}

export default Search;