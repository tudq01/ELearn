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
    <section>
      <h1>Courses</h1>
      <div className="row g-4 justify-content-center">
        {courses.map(course => (
          <CourseItem key={course._id} course={ course }/>
        ))}
      </div>
    </section>
  )
}

export default Course