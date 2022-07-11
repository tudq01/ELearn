import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CourseDetails() {
    const { courseId } = useParams();
    const [loading, setLoading] = useState(false);
    console.log(courseId);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5000/api/courses/${courseId}`)
            .then(
                (response) => {
                    console.log(response);
                    // Something
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
        <div>CourseDetails</div>
    )
}

export default CourseDetails;