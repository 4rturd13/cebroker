import React from "react";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import SearchFilter from "../components/searchFilter/SearchFilter";
import FilterCourses from "../components/filterCourses/FilterCourses";
import CardCourses from "../components/cardCourses/CardCourses";
import "./main.scss";

const Main = ({ responseInfo, noFeaturedInfo }) => {
    return (
        <>
            <Header />
            <Search />
            <section className="coursesSection">
                <div className="alineationFilter">
                    <FilterCourses />
                </div>
                <div className="alineationCards">
                    <CardCourses responseInfo={responseInfo} />
                    <CardCourses responseInfo={noFeaturedInfo} />
                </div>
                <button className="helpBtn">
                    <ion-icon name="help-circle-outline"></ion-icon> Help
                </button>
            </section>
        </>
    );
};

export default Main;
