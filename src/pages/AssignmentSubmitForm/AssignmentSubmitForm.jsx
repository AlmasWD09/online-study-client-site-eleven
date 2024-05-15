

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const AssignmentSubmitForm = () => {
 


    const handleSubmitAssignment = (e) => {
        e.preventDefault()
        const form = e.target
        const photo = form.photo.value
     
        const description = form.description.value
        const assignmentInfo={photo,description}
        
        axios.post(`${import.meta.env.VITE_API_URL}/submit-assignment/api/create`,assignmentInfo)
        .then(data=>{
            if(data.data.insertedId){
                Swal.fire({
                    title: "Submit Assignment Successfull!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
        })
    }

    return (
        <div className="mt-10">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <form onSubmit={handleSubmitAssignment} className="mt-5">
                <div>
                    <label className="text-gray-700 dark:text-gray-200">PDF/doc link</label>
                    <input id="photo" type="photoURL" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Description</label>
                        <textarea name="description" id="" className="resize-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
                        </textarea>
                    </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Submit</button>
                </div>
            </form>
        </section>
    </div>
    );
};

export default AssignmentSubmitForm;