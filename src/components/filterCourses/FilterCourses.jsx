import React from "react";
import "./filterCourses.scss";

const FilterCourses = () => {
    return (
        <form className="formFilterCourses" action="">
            <div className="titleFilter">
                <h5>
                    <ion-icon name="filter-outline"></ion-icon> FILTER COURSE
                    RESULTS
                </h5>
            </div>
            <div className="subtitleFilter">
                <div className="subtitles">
                    <span>Course type</span>
                    <ion-icon name="chevron-up-outline"></ion-icon>
                </div>
                <div class="radio selectItem">
                    <input type="radio" id="featured-1" name="featured" />
                    <label for="featured-1">Self paced</label>
                    <input type="radio" id="featured-2" name="featured" />
                    <label for="featured-2">Live</label>
                </div>
            </div>
            <div className="subtitleFilter">
                <div className="subtitles">
                    <span>Course type</span>
                    <ion-icon name="chevron-up-outline"></ion-icon>
                </div>
                <div class="radio selectItem">
                    <input type="radio" id="featured-3" name="featured" />
                    <label for="featured-3">Any delivery type</label>
                    <input type="radio" id="featured-4" name="featured" />
                    <label for="featured-4">Computer-Based Training</label>
                    <input type="radio" id="featured-5" name="featured" />
                    <label for="featured-5">Correspondece</label>
                    <input type="radio" id="featured-6" name="featured" />
                    <label for="featured-6">Mailed Material</label>
                    <span className="viewMore">View more</span>
                </div>
            </div>
            <div className="subtitleFilter">
                <div className="subtitles">
                    <span>Course type</span>
                    <ion-icon name="chevron-up-outline"></ion-icon>
                </div>
                <div class="radio selectItem">
                    <input type="radio" id="featured-7" name="featured" />
                    <label for="featured-7">Anysubject area</label>
                    <input type="radio" id="featured-8" name="featured" />
                    <label for="featured-8">HIV/AIDS</label>
                    <input type="radio" id="featured-9" name="featured" />
                    <label for="featured-9">
                        End-of-Life Care and Palliative Health Care
                    </label>
                    <input type="radio" id="featured-10" name="featured" />
                    <label for="featured-10">Domestic Violence</label>
                    <span className="viewMore">View more</span>
                </div>
            </div>
        </form>
    );
};

export default FilterCourses;
