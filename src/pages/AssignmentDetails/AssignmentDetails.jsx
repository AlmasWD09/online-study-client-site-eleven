import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const AssignmentDetails = () => {
    const { id } = useParams()
    const [singleData, setSingleData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/assignment/api/get/${id}`)
            setSingleData(data)
        }
        getData()
    }, [id])
    const { _id, date, description, level, marks, photo, title } = singleData || {}
    return (
        <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10">
            <div className='relative'>
                <img className="object-cover w-full h-56 rounded-t-lg" src={photo} alt={title} />
                <p className='absolute -top-2 -right-2 bg-red-500 text-white h-10 w-10 rounded-full flex justify-center items-center'>{marks}</p>
            <button className='absolute bg-black px-4 py-2 right-2 bottom-2 rounded text-white'>{level}</button>
            </div>
            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                    <p className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600">{title}</p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>

                <div className="">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                            <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">Jone Doe</a>
                        </div>
                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                    </div>
                    <Link to='/assignment-submit-form'>
                        <button className="bg-primary px-2 py-1 rounded text-white my-3">Take assignment</button>
                    </Link>
                </div>
            </div>
            {/* modal open */}

        </div>
    );
};

export default AssignmentDetails;