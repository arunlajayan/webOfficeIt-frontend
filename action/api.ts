
interface Response {
    message: string;
    success: boolean;
    token: string;
  }
export const createCourse = async (data: any) => {
    try {
      const response = await fetch("http://localhost:3002/api/v1/course/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
  
      const responseData: Response = await response.json();
      // console.log(responseData);
      localStorage.setItem("token", responseData.token)
      
    } catch (error) {
      console.error("Error:", error);
    }
  };