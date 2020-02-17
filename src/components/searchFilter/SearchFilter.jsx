import React from "react";
import "./searchFilter.scss";

const SearchFilter = () => {
    return (
        <section className="searchFilter">
            <div>
                <a className="filter" href="">
                    Filters
                </a>{" "}
                <span>Sorted by:</span>{" "}
                <a className="relevance" href="">
                    Relevance
                </a>
            </div>
        </section>
    );
};

export default SearchFilter;
