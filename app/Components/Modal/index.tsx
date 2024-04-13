'use client'


import { createCourse } from "@/action/api";
import { Typography } from "@mui/material";
import { redirect, useRouter } from "next/navigation";
import { useFormState } from "react-dom";

let initialState = {
    message: '',
    error: null
}
function Modal() {
    const router = useRouter()
    const sellYourItemAction = (prevState: any, formData: FormData) => {
      const title =  formData.get('title')
        const fee = formData.get('fee')
        const description =formData.get('description')
        createCourse({ "title": title, "fee": fee, "description": description }).then((res: any) => {  
                console.log(res)
                window.location.reload()
            
          });
        
   
    }
    const [state, formAction] = useFormState<any>(
        sellYourItemAction as any,
        initialState
      );
   
    return (
        <>
            <dialog
                className="fixed left-0 top-0 rounded-md w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-gray-200  m-auto p-12">
                    
                    <button type="button" onClick={router.back} className="bg-orange-500 mt-5 rounded-md text-white p-2 ">x</button>
                    <Typography align="center">Add New Course</Typography>
                    <form className="flex flex-col  items-center" action={formAction}>
                        <label className="text-gray-700 font-medium">Title</label>
                        <input className="w-280 p-2 rounded-md text-sm font-normal" name="title" type="text"  required />
                        <label className="text-gray-700 font-medium">Fee</label>
                        <input className="w-280 p-2 rounded-md text-sm font-normal" name="fee" type="number" required />
                        <label className="text-gray-700 font-medium">Description</label>
                        <textarea  className="w-280 p-2 rounded-md text-sm font-normal" name="description" required/>
                        <button type="submit" className="bg-orange-500 mt-5 rounded-md text-white p-2">ADD</button>
                    </form>

                </div>
            </dialog>
        </>
    );
}

export default Modal;