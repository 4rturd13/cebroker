import React from "react";
import "./search.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    return (
        <section className="search">
            <div>
                <span>
                    Find CE for a
                    <a href="" className="text-margin">
                        Florida <FontAwesomeIcon icon={faCaretDown} size="xs" />
                    </a>{" "}
                    <a href="">
                        Medical Doctor{" "}
                        <FontAwesomeIcon icon={faCaretDown} size="xs" />
                    </a>
                </span>
            </div>
            <div>
                <input
                    //FIXME: Icon search
                    className="search-bar"
                    type="text"
                    placeholder=" Search courses and providers"
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
