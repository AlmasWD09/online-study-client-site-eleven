import { useNavigate } from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate()
    const handleGoBack = () =>{
        navigate(-1)
    }
    const handleHomePage = () =>{
        navigate('/')
    }
    return (
        <div className="max-w-7xl mx-auto px-8 flex justify-center items-center">
            <div>
            <div className="max-w-2xl mx-auto bg-gray-400">
                <img src="https://i.ibb.co/yhbV877/404-1.webp" alt="" />
            </div>
            <div className="flex justify-center gap-3">
            <button 
            onClick={handleGoBack}
            className="border-2 border-primary px-4 py-2 rounded-lg font-semibold my-3 hover:bg-primary hover:text-white">Go Back
            </button>
            <button 
            onClick={handleHomePage}
            className="border-2 border-primary px-4 py-2 rounded-lg font-semibold my-3 hover:bg-primary hover:text-white">HomePage
            </button>
            </div>
            </div>
        </div>
    );
};

export default NotFound;