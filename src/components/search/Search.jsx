import React from "react";
import "./search.scss";
// import searchIcon from "../../img/searchIcon.svg";

const Search = () => {
    return (
        <section className="search">
            <div>
                <span>
                    Find CE for a{" "}
                    <a href="">
                        Florida <ion-icon name="caret-down-outline"></ion-icon>
                    </a>{" "}
                    <a href="">
                        Medical Doctor{" "}
                        <ion-icon name="caret-down-outline"></ion-icon>
                    </a>
                </span>
            </div>
            <div>
                <input
                    //FIXME: Icon search
                    className="search-bar"
                    type="text"
                    placeholder="Search courses and providers"
                />
            </div>
            <div className="role">
                <a href="#" className="link-role">
                    COURSES
                </a>
                <a href="#" className="link-role">
                    PROVIDERS
                </a>
            </div>
        </section>
    );
};

export default Search;
