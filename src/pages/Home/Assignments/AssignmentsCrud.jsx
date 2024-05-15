import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import img404 from "/404.webp"
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const AssignmentsCrud = ({ assignment,control,setControl }) => {
    const{user} = useAuth();
    const { _id,userEmail, level, marks, photo, title } = assignment || {}
    const email = user?.email

    const handleDelete = (_id) => {
        if(email !== userEmail){
            toast.error('Assignment create user and Login user does not match')
            return
        }else{
            console.log('hmmm');
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/assignment/api/delete/${_id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted Successfull",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setControl(!control)
                        }
                    })

            }
        });


    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 rounded-t-lg cursor-pointer">
                <div className='relative'>
                    <img className="object-cover w-full h-56 rounded-t-lg" src={photo || img404} alt={title} />
                    <p className='absolute -top-2 -right-2 bg-red-500 text-white h-10 w-10 rounded-full flex justify-center items-center'>{marks || '00'}</p>
                </div>
                <button className='bg-black px-2 rounded rounded-t-none text-white'>{level}</button>
                <div className="space-y-3 py-2">
                    <p className='text-xl font-semibold'>{title || 'Not Fount'}</p>
                    <button onClick={() => handleDelete(_id)} className='bg-red-400 px-2 py-1 mr-2 rounded text-white'>Delete</button>
                    <Link to={`/assignment-update/${_id}`}><button className='bg-green-400 px-2 py-1 mr-2 rounded text-white'>Update</button></Link>
                    <Link to={`/assignment-details/${_id}`}><button className='bg-primary px-2 py-1 mr-2 rounded text-white'>View assignment</button></Link>
                </div>
            </div>
        </div>
    );
};

// props-vaidation
AssignmentsCrud.propTypes = {
    assignment: PropTypes.object,
    control: PropTypes.bool,
    setControl: PropTypes.func,
};
export default AssignmentsCrud;