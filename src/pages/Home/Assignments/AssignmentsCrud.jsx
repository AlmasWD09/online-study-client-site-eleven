import PropTypes from 'prop-types';

const AssignmentsCrud = ({ assignment }) => {
    const { _id, date, description, level, marks, photo, title } = assignment || {}
console.log(typeof assignments);
    return (
        <div className='max-w-7xl mx-auto px-8 mt-10'>
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-56" src={photo} alt={title} />

                    <div className="py-5 text-center">
                    <p>{title}</p>
                    <p>{marks}</p>
                    <button className='bg-secondary px-2 py-1 mr-2 rounded text-white'>Delete</button>
                    <button className='bg-secondary px-2 py-1 mr-2 rounded text-white'>Update</button>
                    <button className='bg-secondary px-2 py-1 mr-2 rounded text-white'>View assignment</button>
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