import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";



const MySubmitedAssignment = () => {
    const { user } = useAuth();
    const [LoadData, setLoadData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/assignment/api/get/user/${user?.email}`)
            setLoadData(data)
        }
        getData()
    }, [user?.email])
  console.log(LoadData);
    return (
        <div className="max-w-7xl mx-auto px-8 mt-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Mark</th>
                                <th>Obtained Mark</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>

                        <tbody>
                          {
                            LoadData.map(item=><tr key={item._id}>
                                <td>
                                <div className="font-bold">Hart Hagerty</div>
                                </td>

                                <td>
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>

                                <td>
                                    Purple
                                </td>

                                <td>
                                  mark
                                </td>

                                <td>
                                    feedback
                                </td>
                                <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                          }
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default MySubmitedAssignment;