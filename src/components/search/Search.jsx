import React from "react";
import "./search.scss";

const Search = () => {
    return (
        <section className="search">
            <div>
                <span>
                    Find CE for a <a href="">Florida</a>{" "}
                    <a href="">Medical Doctor</a>
                </span>
            </div>
            <div>
                <input
                    i
                    className="search-bar"
                    type="text"
                    placeholder="Search courses and providers"
                />
            </div>
            <div className="role">
                <a href="">COURSES</a>
                <a href="">PROVIDERS</a>
            </div>
        </section>
    );
};

export default Search;
