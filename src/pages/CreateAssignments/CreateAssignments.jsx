import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";


const CreateAssignments = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };



    const handleAddAssignment = (e) => {
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



        axios.post(`${import.meta.env.VITE_API_URL}/assignment/api/create`,assignmentInfo)
        .then(data=>{
            if(data.data.insertedId){
                Swal.fire({
                    title: "Create Assignment Successfull!",
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
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Photo URL</label>
                        <input id="photo" name="photo" type="photoURL" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                    </div>
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
                            <label className="text-gray-700 dark:text-gray-200">User Name</label>
                            <input id="" name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Email</label>
                            <input id="" name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Assignment Level</label>
                            <select id="" name="level" value={selectedCategory} onChange={handleCategoryChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
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
                            <textarea name="description" id="" className="resize-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
                            </textarea>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Create Now</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default CreateAssignments;