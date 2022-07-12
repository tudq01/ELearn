import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./CourseDetails.css";
import axios from 'axios';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function CourseDetails() {
    const { courseId } = useParams();
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState([]);
    console.log(courseId);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5000/api/courses/${courseId}`)
            .then(
                (response) => {
                    console.log(response);
                    setCourse(response.data);
                },
                (error) => {
                    console.log(error);
                }
            );
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <section>
                <h2>Loading...</h2>
            </section>
        )
    }

    return (
        <>
            <section id="course-details" className="course-details">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        <div className="col-lg-8">
                            <img src={ course.image } className="img-fluid course-img" alt=""/>
                            <div dangerouslySetInnerHTML={{__html: course.description }}></div>
                        </div>
                        <div className="col-lg-4">

                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h3>{ course.title }</h3>
                            </div>

                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Lecturer/Organizer</h5>
                                <p>{ course.lecturer }</p>
                            </div>

                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Registration fee</h5>
                                <p>{ course.price + " VND"}</p>
                            </div>

                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Duration</h5>
                                <p>{ course.duration }</p>
                            </div>

                            <div className="course-info d-flex justify-content-between align-items-center">
                                <h5>Number of lessons</h5>
                                <p>{ course.lessonNumber }</p>
                            </div>

                            <div className="course-info d-flex justify-content-between align-items-center">
                                <p>{ course.shortDescription }</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    
    )
}

export default CourseDetails;