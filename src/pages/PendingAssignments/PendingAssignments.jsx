import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";



const PendingAssignments = () => {
    const {user} = useAuth()

    const handleAddAssignment = (e) => {
        e.preventDefault()
        const form = e.target

        const title = form.title.value
        const marks = form.marks.value
        const status = form.status.value
        const feedback = form.feedback.value
        const userName = form.name.value
        const assignmentInfo={title,marks,status,feedback,userName}



        axios.post(`${import.meta.env.VITE_API_URL}/pending-assignment/api/create`,assignmentInfo)
        .then(data=>{
            if(data.data.insertedId){
                Swal.fire({
                    title: "Give Mark Successfull!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                
            }
        })
}
    return (
        <div className="mt-10">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Assignment By Category</h2>

            <form onSubmit={handleAddAssignment} className="mt-5">
                
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Title</label>
                        <input id="" name="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Marks</label>
                        <input id="" name="marks" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Status</label>
                        <input id="" name="status" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Feedback</label>
                        <input id="" name="feedback" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Exameen Name</label>
                        <input disabled={user} id="" name="name" type="text" defaultValue={user?.displayName} className="disabled:cursor-not-allowed block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                 
                 
                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Give Mark</button>
                </div>
            </form>
        </section>
    </div>
    );
};

export default PendingAssignments;