
import AssignmentsCrud from "./AssignmentsCrud";
import { useEffect, useState } from "react";
import axios from "axios";

const Assignments = () => {
    const [assignments, setAssignments] = useState([])
    const [filterData, setFilterData] = useState('')
    const [itemPerPage, setItemPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/assignment/api/get?page=${currentPage}&size=${itemPerPage}&filterData=${filterData}`)
            setAssignments(data)
        }
        getData()
    }, [currentPage, itemPerPage, filterData])




    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/assignment/api/get-count?filterData=${filterData}`)
            setCount(data.count)
        }
        getCount()
    }, [filterData])




    const handlePagination = (value) => {
        setCurrentPage(value)
    }
    const numberOfPages = Math.ceil(count / itemPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
    return (
        <div className="mt-10">
            <div className="flex justify-center">

                <select
                    onChange={e => {
                        setFilterData(e.target.value)
                        // setCurrentPage(1)
                    }}
                    value={filterData}
                    name="filterData" id="">
                    <option value="">Filter By Lavel</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto px-8 lg:px-0 mt-10">
                {
                    assignments.map(assignment => {
                        return (
                            <AssignmentsCrud key={(assignment._id)}
                                assignment={assignment}
                            ></AssignmentsCrud>
                        )
                    })
                }
            </div>

            {/* pagination */}
            <div>
                <div className="flex justify-center my-10">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePagination(currentPage - 1)}
                        className="flex items-center px-4 py-2 mx-1 text-gray-500 transition-colors duration-300 transform bg-white rounded-md disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        previous
                    </button>
                    {
                        pages.map((btnNumber, idx) => (
                            <button onClick={() => handlePagination(btnNumber)} key={idx}
                                className={`flex items-center ${currentPage === btnNumber ? 'bg-primary text-green-300 font-bold' : ''} px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-primary-gray dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}>
                                {btnNumber}
                            </button>
                        ))
                    }
                    <button
                        disabled={currentPage === numberOfPages}
                        onClick={() => handlePagination(currentPage + 1)}
                        className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Assignments;