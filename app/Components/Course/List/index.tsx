'use client'
import { CourseState } from '@/app/Types/Course.type';
import React, { useEffect, useState } from 'react';
import Item from '../Item';
import { getUser } from '@/app/Data/Course';
import { Typography } from '@mui/material';

  
interface ListProps {
  courses: CourseState[];
}
 
const List: React.FC = () => {
 
  const [courses, setCourses] = useState<CourseState[]>([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userData:any = await getUser();
        setCourses(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course data:", error);
   
      }
    };

    fetchData();
  }, []);
  const renderCourseItem = () => {
    if (loading) {
      return <Typography variant="h5" component="h1" textAlign="center">Loading...</Typography>;
    }else if (!courses || courses.length === 0) {
      return <Typography variant="h5" component="h1" textAlign="center">No data available</Typography>;
    }
  
    return courses.map((course) => <Item key={course._id} course={course} />);
  };

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
      {renderCourseItem()}
    </div>
  );
};

export default List;
