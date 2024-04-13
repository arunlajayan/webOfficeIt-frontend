import { CourseState } from '@/app/Types/Course.type';
import React from 'react';
import Title from './Title';
import List from './List';

// Types
interface CourseProps {
  courses: CourseState[];
}
// Component
const Course: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Title title={'Show All Course'} />
      <List />
    </div>
  );
};

export default Course;
