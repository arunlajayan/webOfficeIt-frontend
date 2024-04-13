
interface Response {
    message: string;
    success: boolean;
    token: string;
  }
export const createCourse = async (data: any) => {
    try {
      const response = await fetch("https://udemy-clone-backend-0zio.onrender.com/api/v1/course/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
  
      return await response.json();
   
      
    } catch (error) {
      console.error("Error:", error);
    }
  };