import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateAssignments = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };



    const handleAddBook = (e) =>{
        e.preventDefault()
        const photo = e.target.photo.value;
        const title = e.target.title.value;
        const marks = e.target.marks.value;
        const authorName = e.target.authorName.value;
        const rating = e.target.rating.value;
        const selectedCategory = e.target.category.value;
        const description = e.target.description.value;
    
        
    }
    return (
        <div className="mt-10">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Book By Category</h2>

            <form onSubmit={handleAddBook} className="mt-5">
                <div>
                    <label className="text-gray-700 dark:text-gray-200">Photo URL</label>
                    <input id="photo" type="photoURL" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
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
                    <label className="text-gray-700 dark:text-gray-200">Assignment Level</label>
                    <select id="" name="level" value={selectedCategory} onChange={handleCategoryChange}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200 block">Date</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring" />
                </div>


                <div>
                    <label className="text-gray-700 dark:text-gray-200">Description</label>
                    <textarea name="description" id=""   className="resize-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring">
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