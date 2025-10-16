import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getHome } from "../../redux/home/thunk/fetchHome.js";

function Content({ widthContent }) {
    const { homes, error, loading } = useSelector((state) => state.home);
    console.log(homes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHome())
    }, [dispatch])
    if (loading) return <div>Loading users...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className={`w-${widthContent} flex flex-col justify-center justify-items-center`}>
            {homes && homes.map((home)=>(
                <div key={home._id} className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                    <h1 className="font-roboto text-xl text-black">{home.homeTitle}</h1>
                    <p className="font-roboto text-base text-[#4e443c] text-justify">
                        {home.homeContent}
                    </p>
                    <div className="flex flex-row py-2 gap-x-2">
                        <Link to="https://www.facebook.com">
                            <FaSquareFacebook />
                        </Link>
                        <Link to="https://www.twitter.com">
                            <FaSquareXTwitter />
                        </Link>
                        <Link to="https://www.linkedin.com">
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
                ))
            }
        </div>
    );
}
export default Content