import homePic from "../../assets/Khaled sir.jpg"
function Picture({ widthPicture }) {
    return (
        <div className={`w-${widthPicture} bg-white flex flex-col justify-center items-center`}>
            <div className="w-1/3 lg:w-2/3 flex flex-col justify-center items-center">
            <img
                className="border-2 border-gray-900 rounded-full"
                src={homePic} alt="khaled mahmud" />
            </div>
        </div>
    );
}

export default Picture