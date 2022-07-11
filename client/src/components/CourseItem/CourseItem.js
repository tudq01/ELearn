import React from 'react';
import './CourseItem.css';
import { Link } from "react-router-dom";

function CourseItem(props) {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src={ props.course.image } alt=""/>
                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                        <Link to={`/courses/${props.course._id}`} className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: "30px 0 0 30px"}}>
                            Read More
                        </Link>
                    </div>
                </div>
                <div className="text-center p-4 pb-0">
                    <h3 className="mb-0">{ props.course.price + " VND" }</h3>
                    <h5 className="mb-4">{ props.course.title }</h5>
                </div>
                <div className="d-flex border-top">
                    <p>{ props.course.shortDescription }</p>
                </div>
            </div>
        </div>
    )
}

export default CourseItem;