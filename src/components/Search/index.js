import React from "react";
import "./style.css";

function Search (props) {
    return (
        <form className='input-group searchbar' onSubmit={props.search}>
            <select className="form-select" aria-label="Select Search by" id='search-param'>
                <option defaultValue value='all'>Search by</option>
                <option value="last-name">Last Name</option>
                <option value="first-name">First Name</option>
                <option value="city">City</option>
            </select>
            <input id='search-input' type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="submit" className="btn btn-search"><i className="fas fa-search"></i></button>
        </form>
    );
}

export default Search;