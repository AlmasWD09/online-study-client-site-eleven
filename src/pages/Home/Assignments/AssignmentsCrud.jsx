import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AssignmentsCrud = ({ assignment }) => {
    const { _id, date, description, level, marks, photo, title } = assignment || {}
    return (
        <div className=''>
            <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 rounded-t-lg cursor-pointer">
                <div className='relative'>
                <img className="object-cover w-full h-56 rounded-t-lg" src={photo} alt={title} />
                <p className='absolute -top-2 -right-2 bg-red-500 text-white h-10 w-10 rounded-full flex justify-center items-center'>{marks}</p>
                </div>
                <button className='bg-black px-2 rounded rounded-t-none text-white'>{level}</button>
                    <div className="space-y-3 py-2">
                    <p className='text-xl font-semibold'>{title}</p>
                    <button className='bg-secondary px-2 py-1 mr-2 rounded text-white'>Delete</button>
                    <button className='bg-secondary px-2 py-1 mr-2 rounded text-white'>Update</button>
                    <Link to={`/assignment-details/${_id}`}><button className='bg-secondary px-2 py-1 mr-2 rounded text-white'>View assignment</button></Link>
                    </div>
            </div>
        </div>
    );
};

// props-vaidation
AssignmentsCrud.propTypes = {
    assignment: PropTypes.object,
};
export default AssignmentsCrud;