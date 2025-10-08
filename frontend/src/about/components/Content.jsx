import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from "../../redux/about/thunk/fetchAbout.js";
import { updateAbout } from "../../redux/about/thunk/updateAbout.js";
import { IoSaveOutline } from "react-icons/io5";

function Content() {
    const { abouts, error, loading } = useSelector((state) => state)
    const dispatch = useDispatch();
    const [aboutToEdit, setAboutToEdit] = useState(null);
    const [formData, setFormData] = useState({
        aboutName: "",
        aboutRole: "",
        aboutPassword: "",
        aboutOccupation: "",
        aboutContent: "",
        aboutPicture: "",
        aboutDateOfBirth: "",
        aboutAge: "",
        aboutAddress: "",
        aboutEmail: "",
        aboutPhone: "",
        aboutNationality: "",
        aboutStudy: "",
        aboutInterest: "",
        aboutReligion: "",
        aboutMasterSession: "",
        aboutMasterUniversity: "",
        aboutMasterDegree: "",
        aboutBachelorSession: "",
        aboutBachelorUniversity: "",
        aboutBachelorDegree: "",
        aboutCollegeSession: "",
        aboutCollegeCampus: "",
        aboutCollegeDegree: "",
        isEditing: "",
    })

    useEffect(() => {
        if (aboutToEdit) {
            setFormData(aboutToEdit);
        } else {
            setFormData(
                {
                    aboutName: "",
                    aboutRole: "",
                    aboutPassword: "",
                    aboutOccupation: "",
                    aboutContent: "",
                    aboutPicture: "",
                    aboutDateOfBirth: "",
                    aboutAge: "",
                    aboutAddress: "",
                    aboutEmail: "",
                    aboutPhone: "",
                    aboutNationality: "",
                    aboutStudy: "",
                    aboutInterest: "",
                    aboutReligion: "",
                    aboutMasterSession: "",
                    aboutMasterUniversity: "",
                    aboutMasterDegree: "",
                    aboutBachelorSession: "",
                    aboutBachelorUniversity: "",
                    aboutBachelorDegree: "",
                    aboutCollegeSession: "",
                    aboutCollegeCampus: "",
                    aboutCollegeDegree: "",
                    isEditing: "",
                }
            );
        }
        dispatch(fetchUsers())
    }, [dispatch, aboutToEdit]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (aboutToEdit) {
            dispatch(updateAbout(formData));
            setAboutToEdit(null);
        }
        setFormData({
            aboutName: "",
            aboutRole: "",
            aboutPassword: "",
            aboutOccupation: "",
            aboutContent: "",
            aboutPicture: "",
            aboutDateOfBirth: "",
            aboutAge: "",
            aboutAddress: "",
            aboutEmail: "",
            aboutPhone: "",
            aboutNationality: "",
            aboutStudy: "",
            aboutInterest: "",
            aboutReligion: "",
            aboutMasterSession: "",
            aboutMasterUniversity: "",
            aboutMasterDegree: "",
            aboutBachelorSession: "",
            aboutBachelorUniversity: "",
            aboutBachelorDegree: "",
            aboutCollegeSession: "",
            aboutCollegeCampus: "",
            aboutCollegeDegree: "",
            isEditing: "",
        });
    };

    if (loading) return <div>Loading users...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            {
                abouts.map((about) => (
                    <form onSubmit={handleSubmit} key={about._id} className="pt-4">
                        {about.aboutRole === "admin" ? (aboutToEdit ? (
                            <div className="flex flex-col justify-start items-start gap-y-2">
                                <div className="flex flex-row justify-start items-start">
                                    <input
                                        className="font-roboto text-xl border border-slate-200"
                                        type="text"
                                        name="aboutName"
                                        value={formData.aboutName}
                                        onChange={handleChange}
                                    />
                                    <button type="submit">
                                        <IoSaveOutline className="cursor-pointer" />
                                    </button>
                                </div>
                                <div className="flex flex-row justify-start items-start">
                                    <input
                                        className="font-roboto text-base border text-[#4e443c] border-slate-200"
                                        type="text"
                                        name="aboutOccupation"
                                        value={formData.aboutOccupation}
                                        onChange={handleChange}
                                    />
                                    <button type="submit">
                                        <IoSaveOutline className="cursor-pointer" />
                                    </button>
                                </div>
                                <div className="flex flex-row justify-start items-start">
                                    <textarea
                                    rows="7" 
                                    cols="70"
                                        className="font-roboto text-base text-[#4e443c] border border-slate-200"
                                        type="text"
                                        name="aboutContent"
                                        value={formData.aboutContent}
                                        onChange={handleChange}
                                    />
                                    <button type="submit">
                                        <IoSaveOutline className="cursor-pointer" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="flex flex-row justify-start items-center">
                                    <h1 className="font-roboto text-xl">{about.aboutName}</h1>
                                    <button onClick={() => setAboutToEdit(about)}>
                                        <CiEdit className="cursor-pointer" />
                                    </button>
                                </div>
                                <div className="flex flex-row justify-start items-center pb-4 border-b border-gray-200">
                                    <h2 className="font-roboto text-base text-[#4e443c] text-justify">{about.aboutOccupation}</h2>
                                    <button onClick={() => setAboutToEdit(about)}>
                                        <CiEdit className="cursor-pointer" />
                                    </button>
                                </div>
                                <div className="flex flex-row justify-start items-center">
                                    <p className="font-roboto text-base text-[#4e443c] text-justify py-4 border-b border-gray-200">{about.aboutContent}</p>
                                    <button onClick={() => setAboutToEdit(about)}>
                                        <CiEdit className="cursor-pointer" />
                                    </button>
                                </div>
                            </>
                        )) : (
                            <div>
                                <h1 className="font-roboto text-xl">{about.aboutName}</h1>
                                <h2 className="font-roboto text-base text-[#4e443c] text-justify pb-4 border-b border-gray-200">{about.aboutOccupation}</h2>
                                <p className="font-roboto text-base text-[#4e443c] text-justify py-4 border-b border-gray-200">
                                    {about.aboutContent}
                                </p>
                            </div>
                        )
                        }

                    </form>
                ))
            }
        </>
    );
}

export default Content 