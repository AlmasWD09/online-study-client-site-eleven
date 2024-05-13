
import AssignmentsCrud from "./AssignmentsCrud";
import { useEffect, useState } from "react";
import axios from "axios";


const Assignments = () => {
const [assignments,setAssignments] = useState([])

useEffect(()=>{
    const getData = async()=>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/assignment/api/get`)
        setAssignments(data)
    }
getData()
},[])   

    return (
        <div>
            <div className="flex justify-center">
            <select name="" id="">
                <option value="">Filter By Assignment</option>
            </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto px-8 lg:px-0 mt-10">
                {
                    assignments.map(assignment=>{
                        return (
                            <AssignmentsCrud key={(assignment._id)}
                            assignment={assignment}
                            ></AssignmentsCrud>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Assignments;