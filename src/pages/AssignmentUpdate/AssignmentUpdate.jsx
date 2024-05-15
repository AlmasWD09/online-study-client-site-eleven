import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import Swal from "sweetalert2";


const AssignmentUpdate = () => {
    const {user} = useAuth()
    const [selectedCategory, setSelectedCategory] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const loadData = useLoaderData()
    const {_id, description, level, marks, photo, title } = loadData || {}


    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleUpdateAssignment = (e) => {
        e.preventDefault()
        const form = e.target
        const photo = form.photo.value
        const title = form.title.value
        const marks = form.marks.value
        const userName = form.name.value
        const userEmail = form.email.value
        const level = form.level.value
        const date = startDate.toLocaleDateString()
        const description = form.description.value
        const assignmentInfo={photo,title,marks,userName,userEmail,level,date,description}
        axios.put(`${import.meta.env.VITE_API_URL}/assignment/api/update/${_id}`,assignmentInfo)
        .then(data=>{
            if(data.data.modifiedCount > 0){
                Swal.fire({
                    title: "Update Assignment Successfull!",
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

            <form onSubmit={handleUpdateAssignment} className="mt-5">
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Photo URL</label>
                    <input id="photo" name="photo" type="photoURL" defaultValue={photo} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Title</label>
                        <input id="" name="title" type="text" defaultValue={title} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Marks</label>
                        <input id="" name="marks" type="number" defaultValue={marks} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">User Name</label>
                        <input disabled={user} id="" name="name" type="text" defaultValue={user?.displayName} className="disabled:cursor-not-allowed block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Email</label>
                        <input disabled={user} id="" name="email" type="email" defaultValue={user?.email} className="disabled:cursor-not-allowed block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Assignment Level</label>
                        <select id="" name="level" value={selectedCategory} onChange={handleCategoryChange} defaultValue={level} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200 block">Date</label>
                        <DatePicker   name="date" selected={startDate} onChange={(date) => setStartDate(date)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Description</label>
                        <textarea name="description" id="" defaultValue={description} className="resize-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
                        </textarea>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Update Now</button>
                </div>
            </form>
        </section>
    </div>
    );
};

export default AssignmentUpdate;