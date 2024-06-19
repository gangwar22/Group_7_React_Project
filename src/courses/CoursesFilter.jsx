import React, { useState } from 'react';
import './Courses.css';
import CourseCard from '../courses/CourseCard.jsx';
import Filter from './Filter.jsx'; // Assuming you have a Filter component

const coursesData = [
  { title: 'React Basics', description: 'Learn the fundamentals of React.', instructor: 'John Doe', language: 'English', rating: 4.5, price: 100, category: 'Web Development', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-1.jpg' },
  { title: 'Advanced React', description: 'Dive deeper into React.', instructor: 'Jane Smith', language: 'English', rating: 4.7, price: 150, category: 'Web Development', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-2.jpg' },
  { title: 'JavaScript Essentials', description: 'Understand the core concepts of JavaScript.', instructor: 'Bob Johnson', language: 'English', rating: 4.3, price: 90, category: 'Programming', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-3.jpg' },
  // ... add more course objects up to 18
  { title: 'HTML & CSS', description: 'Build beautiful websites with HTML and CSS.', instructor: 'Alice Davis', rating: 4.6, price: 50, category: 'Web Development', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-4.jpg' },
  { title: 'Node.js Basics', description: 'Get started with server-side JavaScript.', instructor: 'Charlie Brown', rating: 4.4, price: 70, category: 'Programming', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-5.jpg' },
  { title: 'Python for Beginners', description: 'Learn Python from scratch.', instructor: 'Emily Wilson', rating: 4.7, price: 80, category: 'Programming', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-6.jpg' },
  { title: 'Data Structures', description: 'Master data structures and algorithms.', instructor: 'Michael Lee', rating: 4.8, price: 120, category: 'Computer Science', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-7.jpg' },
  { title: 'Machine Learning', description: 'An introduction to machine learning concepts.', instructor: 'Sarah Kim', rating: 4.9, price: 200, category: 'Data Science', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-22.jpg' },
  { title: 'Web Development', description: 'Learn how to create web applications.', instructor: 'Laura Scott', rating: 4.6, price: 100, category: 'Web Development', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-9.jpg' },
  { title: 'Mobile Development', description: 'Build mobile apps with React Native.', instructor: 'Mark Evans', rating: 4.5, price: 150, category: 'Programming', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-23.jpg' },
  { title: 'Database Management', description: 'Learn how to manage databases.', instructor: 'Sophia Green', rating: 4.3, price: 90, category: 'Computer Science', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-29.jpg' },
  { title: 'DevOps Basics', description: 'Introduction to DevOps practices.', instructor: 'James Martin', rating: 4.6, price: 130, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-13.jpg' },
  { title: 'Cloud Computing', description: 'Learn about cloud services.', instructor: 'Kevin White', rating: 4.7, price: 140, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-30.jpg' },
  { title: 'DevOps Basics', description: 'Introduction to DevOps practices.', instructor: 'James Martin', rating: 4.6, price: 130, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-31.jpg' },
  { title: 'Cloud Computing', description: 'Learn about cloud services.', instructor: 'Kevin White', rating: 4.7, price: 140, category: 'IT & Software', language: 'English', image: 'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-21.jpg' }

];

function CoursesFilter() {
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  const handleFilterChange = (filters) => {
    let filtered = coursesData;

    if (filters.category) {
      filtered = filtered.filter(course => course.category === filters.category);
    }

    if (filters.price) {
      filtered = filtered.filter(course => course.price <= filters.price);
    }

    if (filters.instructor) {
      filtered = filtered.filter(course => course.instructor === filters.instructor);
    }

    if (filters.language) {
      filtered = filtered.filter(course => course.language === filters.language);
    }

    if (filters.rating) {
      filtered = filtered.filter(course => course.rating >= filters.rating);
    }

    setFilteredCourses(filtered);
  };

  return (
    <div className="App" id='filter'>
      <div className='slider-box'>
        <img src="https://www.rukmanisoftware.com/public/assets/img/online-training.jpg" alt="Courses Banner" className="slider-image" />
      </div>
      <h1>Available Courses</h1>
      <div className="main-container">
        <Filter onFilterChange={handleFilterChange} />
        <div className="courses-container">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              instructor={course.instructor}
              image={course.image}
              language={course.language}
              rating={course.rating}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesFilter;