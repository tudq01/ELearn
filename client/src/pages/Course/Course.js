import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Course() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/courses`)
      .then(
        (response) => {
          console.log(response);
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
    <div>Course</div>
  )
}

export default Course