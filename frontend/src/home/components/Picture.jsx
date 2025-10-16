import homePic from "../../assets/Khaled sir.jpg"
function Picture({ widthPicture }) {
    return (
        <div className={`w-${widthPicture} flex flex-col justify-center items-center`}>
            <div className="w-1/3 lg:w-2/3 flex flex-col justify-center items-center">
            <img
                className="border-2 border-gray-900 rounded-full"
                src="https://res.cloudinary.com/ditjy209s/image/upload/v1760591719/Khaled_sir_xftdjv.jpg" 
                alt="khaled mahmud" />
            </div>
        </div>
    );
}

export default Picture