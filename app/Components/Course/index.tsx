import { CourseState } from '@/app/Types/Course.type';
import React from 'react';
import Title from './Title';
import List from './List';


interface CourseProps {
  courses: CourseState[];
}

const Course: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Title title={'Show All Course'} />
      <List />
    </div>
  );
};

export default Course;
