import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { getHome } from "../../redux/home/thunk/fetchHome.js";
import { IoSaveOutline } from "react-icons/io5";
import { updateHome } from "../../redux/home/thunk/updateHome.js";
import { CiEdit } from "react-icons/ci";

function Content({ widthContent }) {
    const { homes, error, loading } = useSelector((state) => state.home);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        homeTitle: "",
        homeContent: "",
    })
    const [homeEdit, setHomeEdit] = useState(false);
    useEffect(() => {
        if (homeEdit) {
            setFormData(homeEdit)
        } else {
            setFormData({
                homeTitle: "",
                homeContent: "",
            })
        }
        dispatch(getHome())
    }, [dispatch, homeEdit])

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (homeEdit) {
            dispatch(updateHome(formData))
            setHomeEdit(null)
        } {
            setFormData({
                homeTitle: "",
                homeContent: "",
            })
        }
    }

    if (loading) return <div>Loading users...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className={`w-${widthContent} flex flex-col justify-center items-center`}>
            {homes && homes.map((home) => (
                <form onSubmit={handleSubmit} key={home._id} className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                    {home.homeRole === "admin" ? (homeEdit ? (
                        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                            <div className="flex flex-row justify-start items-start">
                                <input
                                    className="font-roboto text-base border border-slate-200"
                                    type="text"
                                    name="homeTitle"
                                    value={formData.homeTitle}
                                    onChange={handleChange}
                                />
                                <button type="submit">
                                    <IoSaveOutline className="cursor-pointer" />
                                </button>
                            </div>
                            <div className="flex flex-row justify-start items-start">
                                <textarea
                                    rows="7"
                                    cols="60"
                                    className="font-roboto text-base border border-slate-200"
                                    type="text"
                                    name="homeContent"
                                    value={formData.homeContent}
                                    onChange={handleChange}
                                />
                                <button type="submit">
                                    <IoSaveOutline className="cursor-pointer" />
                                </button>
                            </div>
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
                    ) : (
                        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                            <div className="flex flex-row justify-start">
                                <h2 className="font-roboto text-xl text-black">{home.homeTitle}</h2>
                                <button onClick={() => setHomeEdit(home)}>
                                    <CiEdit className="cursor-pointer" />
                                </button>
                            </div>
                            <div className="flex flex-row justify-start">
                                <h2 className="font-roboto text-base text-[#4e443c] text-justify">{home.homeContent}</h2>
                                <button onClick={() => setHomeEdit(home)}>
                                    <CiEdit className="cursor-pointer" />
                                </button>
                            </div>
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
                    )
                    ) : (
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
                    )}
                </form>
            ))
            }
        </div>
    );
}
export default Content