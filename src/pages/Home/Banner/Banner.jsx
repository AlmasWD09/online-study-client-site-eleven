

const Banner = () => {
    return (
       <div className="bg-cover bg-center h-[400px] flex justify-center items-center " style={{backgroundImage:"linear-gradient(to right, rgba(75, 85, 99, 0.8), rgba(55, 65, 79, 0.8)),url('https://i.ibb.co/fqTwRMK/banner.webp')"}}>
        <div className="w-[60%] mx-auto text-center">
            <h1 className=" font-semibold text-white lg:text-4xl">Elevate Learning Unite Minds Achieve Academic Excellence</h1>
            <button className="px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-primary rounded-md lg:w-auto hover:bg-primary-gray focus:outline-none focus:bg-primary-gray">Explore Now</button>
        </div>

       </div>
    );
};

export default Banner;