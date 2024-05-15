import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";



const MySubmitedAssignment = () => {
    const { user } = useAuth();
    const [LoadData, setLoadData] = useState([])
    const{title,status,marks,feedback} = LoadData || {}
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/submit-assignment/api/get`)
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
                                <div className="font-bold">{item.title}</div>
                                </td>

                                <td>
                                    <span className="badge badge-ghost badge-sm">{item.status}</span>
                                </td>

                                <td>
                                60
                                </td>

                                <td>
                                  {item.marks}
                                </td>

                                <td>
                                    {item.feedback}
                                </td>
                            </tr>)
                          }
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default MySubmitedAssignment;