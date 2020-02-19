import React from "react";
import "./cardCourses.scss";

const CardsCourses = ({ responseInfo }) => {
    return responseInfo.map((infoCourse, id) => {
        return (
            <div className="cardCourses" key={id}>
                {infoCourse.course.featuredBanner ? (
                    <img
                        src={`https://test.storage.cebroker.com/cebroker/${infoCourse.course.featuredBanner}`}
                        alt="course image"
                        className="courseImage"
                    />
                ) : (
                    ""
                )}
                <div>
                    <p className="courseName">{infoCourse.course.name}</p>
                    {/* <p className="isFeatured">?</p> */}
                    <p className="providerName">
                        {infoCourse.course.provider.name}
                    </p>
                    <div className="description">
                        {" "}
                        {/* FIXME: inline icon & text */}
                        <p className="numberOfHours">
                            <ion-icon name="time-outline"></ion-icon>
                            {` ${infoCourse.course.components[0].profession.totalHours} Hours`}
                        </p>
                        <p className="typeOfCourse">
                            <ion-icon name="laptop-outline"></ion-icon>
                            {` ${infoCourse.course.deliveryMethod.description}`}
                        </p>
                    </div>
                </div>
                <div className="priceShare">
                    <p className="price">{infoCourse.price}</p>
                    <span className="share">
                        <ion-icon name="arrow-redo"></ion-icon>
                    </span>
                </div>
            </div>
        );
    });
};
export default CardsCourses;
