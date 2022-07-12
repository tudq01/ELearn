import React, { useState, useEffect } from 'react';
import CourseItem from "../../components/CourseItem/CourseItem";
import axios from 'axios';

function Course() {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/courses`)
      .then(
        (response) => {
          console.log(response);
          setCourses(response.data);
        },
        (error) => {
          console.log(error);
        }
      )
    setLoading(false);
  }, []);

  if (loading){
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    )
  }

  return (
    <section className="container-xxl py-5">
      <div className="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Courses</h6>
          <h1 class="mb-5">Popular Courses</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {courses.map(course => (
            <CourseItem key={course._id} course={ course }/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Course