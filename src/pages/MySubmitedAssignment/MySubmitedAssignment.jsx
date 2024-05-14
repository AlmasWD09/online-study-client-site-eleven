import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";



const MySubmitedAssignment = () => {
    const { user } = useAuth();
    const [userLoadData, setUserLoadData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/assignment/api/get/user/${user?.email}`)
            setUserLoadData(data)
        }
        getData()
    }, [user?.email])

    return (
        <div className="max-w-7xl mx-auto px-8 mt-10">
            <div>
                {
                    userLoadData.map(data => {
                        return (
                            <div key={data._id} className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <th>Name</th>
                                            <th>Job</th>
                                            <th>Favorite Color</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                        <div className="text-sm opacity-50">United States</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Zemlak, Daniel and Leannon
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                            </td>
                                            <td>Purple</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MySubmitedAssignment;