import { CourseState } from '../Types/Course.type';

interface Response {
  message: string;
  success: boolean;

}
export const getUser = async () => {
  try {
    const response = await fetch("http://localhost:3002/api/v1/course/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const responseData: Response = await response.json();

    return responseData;
    
  } catch (error) {
    console.error("Error:", error);
  }
};

export const updateCourse = async (courseId: string, data: Partial<CourseState>) => {
  try {
    const response = await fetch(`http://localhost:3002/api/v1/course/${courseId}`, {
      method: "PATCH", // Use PATCH method for updating
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update course");
    }

    const responseData: Response = await response.json();
    console.log("Course updated successfully:", responseData);
  } catch (error) {
    console.error("Error updating course:", error);
  }
};

export const courseData: CourseState[] = [
  {
    _id: "1",
    fee:123,
    title: 'javascript',
    img: 'https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png',
    description:'buy this course for exclusive deals and win a summer camp',
  },
  {
    _id: "2",
    fee:123,
    title: 'Bootstrap',
    img: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-social.png',
    description:'buy this course for exclusive deals and win a summer camp',
  },
  {
    _id: "3",
    fee:123,
    title: 'React js',
    img: 'https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2021/09/01031030/ReactJS.png',
    description:'buy this course for exclusive deals and win a summer camp',
  },
  {
    _id: "4",
    fee:123,
    title: 'Next js',
    img: 'https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424',
    description:'buy this course for exclusive deals and win a summer camp',
  },
];
