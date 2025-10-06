import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from "../../redux/about/thunk/fetchAbout.js";
import { updateAbout } from "../../redux/about/thunk/updateAbout.js";
import { IoSaveOutline } from "react-icons/io5";
function Education() {
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
        <div className="w-full flex flex-col justify-start py-6">
            <h1 className="font-roboto text-lg">Education</h1>
            <div className="flex flex-row justify-start">
                <div className="h-16 border-l border-gray-200" />
                {abouts.map((education) => (
                    <form key={education._id}
                        onSubmit={handleSubmit}
                        className="flex flex-row justify-start items-center gap-x-12">
                        {
                            education.aboutRole === "admin" ? (aboutToEdit ? (
                                <>
                                    <div className="flex flex-row justify-start items-center gap-x-2">
                                        <div className="w-4 h-4 z-10 border-1 border-gray-200 bg-gray-300 rounded-full -ml-2"></div>
                                        <input className="p-1 bg-gray-200 rounded-xl font-roboto text-xs text-[#4e443c] border border-slate-200"
                                            type="text"
                                            name="aboutMasterSession"
                                            value={formData.aboutMasterSession}
                                            onChange={handleChange}
                                        />
                                        <button type="submit">
                                            <IoSaveOutline className="cursor-pointer" />
                                        </button>
                                    </div>
                                    <div className="flex flex-col justify-start items-start lg:gap-x-2 ">
                                        <div className="flex flex-row justify-start items-start">
                                            <input className="font-roboto text-xs text-black border border-slate-200"
                                                type="text"
                                                name="aboutMasterUniversity"
                                                value={formData.aboutMasterUniversity}
                                                onChange={handleChange}
                                            />
                                            <button type="submit">
                                                <IoSaveOutline className="cursor-pointer" />
                                            </button>
                                        </div>
                                        <div className="flex flex-row justify-start items-start">
                                            <input className="font-roboto text-xs text-black border border-slate-200"
                                                type="text"
                                                name="aboutMasterDegree"
                                                value={formData.aboutMasterDegree}
                                                onChange={handleChange}
                                            />
                                            <button type="submit">
                                                <IoSaveOutline className="cursor-pointer" />
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-row justify-start items-center lg:gap-x-2">
                                        <li className="w-4 h-4 z-10 border-1 border-gray-200 bg-gray-300 list-none rounded-full -ml-2"></li>
                                        <li className="p-1 bg-gray-200 rounded-xl font-roboto list-none text-xs text-[#4e443c]">{education.aboutMasterSession}</li>
                                        <button onClick={() => setAboutToEdit(education)}>
                                            <CiEdit className="cursor-pointer" />
                                        </button>
                                    </div>
                                    <div className="flex flex-col justify-start items-start gap-x-2">
                                        <div className="flex flex-row justify-start items-start">
                                            <li className="font-roboto text-xs list-none text-black">{education.aboutMasterUniversity}</li>
                                            <button onClick={() => setAboutToEdit(education)}>
                                                <CiEdit className="cursor-pointer" />
                                            </button>
                                        </div>
                                        <div className="flex flex-row justify-start items-start">
                                            <li className="text-[#4e443c] font-roboto list-none text-xs">{education.aboutMasterDegree}</li>
                                            <button onClick={() => setAboutToEdit(education)}>
                                                <CiEdit className="cursor-pointer" />
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )

                            ) : (
                                <>
                                    <div className="flex flex-row justify-start items-center lg:gap-x-2">
                                        <li className="w-4 h-4 z-10 border-1 border-gray-200 bg-gray-300 list-none rounded-full -ml-2"></li>
                                        <li className="p-1 bg-gray-200 rounded-xl font-roboto text-xs list-none text-[#4e443c]">{education.aboutMasterSession}</li>
                                    </div>
                                    <div className="flex flex-col justify-start items-start">
                                        <li className="font-roboto text-xs text-black list-none">{education.aboutMasterUniversity}</li>
                                        <span className="text-[#4e443c] font-roboto text-xs">{education.aboutMasterDegree}</span>
                                    </div>
                                </>
                            )
                        }

                    </form>
                ))}
            </div>
            <div className="flex flex-row justify-start">
                <div className="h-16 border-l border-gray-200" />
                {
                    abouts.map((education) => (
                        <form onSubmit={handleSubmit} className="flex flex-row justify-start items-center gap-x-12">
                            {
                                education.aboutRole === "admin" ? (aboutToEdit ? (
                                    <>
                                        <div className="flex flex-row justify-start items-center lg:gap-x-2">
                                            <li className="w-4 h-4 z-10 border-1 border-gray-200 bg-gray-300 list-none rounded-full -ml-2"></li>
                                            <input className="p-1 bg-gray-200 rounded-xl font-roboto text-xs text-[#4e443c] border border-slate-200"
                                                name="aboutBachelorSession"
                                                value={formData.aboutBachelorSession}
                                                onChange={handleChange}
                                            />
                                            <button type="submit">
                                                <IoSaveOutline className="cursor-pointer" />
                                            </button>
                                        </div>
                                        <div className="flex flex-col justify-start items-start lg:gap-x-2">
                                            <div className="flex flex-row justify-start items-start">
                                                <input className="font-roboto text-xs text-black border border-slate-200"
                                                    type="text"
                                                    name="aboutBachelorUniversity"
                                                    value={formData.aboutBachelorUniversity}
                                                    onChange={handleChange}
                                                />
                                                <button type="submit">
                                                    <IoSaveOutline className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row justify-start items-start">
                                                <input className="text-[#4e443c] font-roboto text-xs border border-slate-200"
                                                    type="text"
                                                    name="aboutBachelorDegree"
                                                    value={formData.aboutBachelorDegree}
                                                    onChange={handleChange}
                                                />
                                                <button type="submit">
                                                    <IoSaveOutline className="cursor-pointer" />
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex flex-row justify-start items-center lg:gap-x-2">
                                            <li className="w-4 h-4 z-10 border-1 border-gray-200 bg-gray-300 list-none rounded-full -ml-2"></li>
                                            <li className="p-1 bg-gray-200 rounded-xl font-roboto list-none text-xs text-[#4e443c]">{education.aboutBachelorSession}</li>
                                            <button onClick={() => setAboutToEdit(education)}>
                                                <CiEdit className="cursor-pointer" />
                                            </button>
                                        </div>
                                        <div className="flex flex-col justify-start items-start lg:gap-x-2">
                                            <div className="flex flex-row justify-start items-start">
                                                <li className="font-roboto text-xs text-black list-none">{education.aboutBachelorUniversity}</li>
                                                <button onClick={() => setAboutToEdit(education)}>
                                                    <CiEdit className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row justify-start items-start">
                                                <li className="text-[#4e443c] font-roboto text-xs list-none">{education.aboutBachelorDegree}</li>
                                                <button onClick={() => setAboutToEdit(education)}>
                                                    <CiEdit className="cursor-pointer" />
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )
                                ) : (
                                    <>
                                        <div className="flex flex-row justify-start items-center lg:gap-x-2">
                                            <li className="w-4 h-4 z-10 border-1 border-gray-200 bg-gray-300 list-none rounded-full -ml-2"></li>
                                            <li className="p-1 bg-gray-200 rounded-xl font-roboto list-none text-xs text-[#4e443c]">{education.aboutBachelorSession}</li>
                                        </div>
                                        <div className="flex flex-col justify-start items-start">
                                            <li className="font-roboto text-xs text-black list-none">{education.aboutBachelorUniversity}</li>
                                            <span className="text-[#4e443c] font-roboto text-xs list-none">{education.aboutBachelorDegree}</span>
                                        </div>
                                    </>
                                )
                            }

                        </form>
                    ))
                }
            </div>
            <div className="flex flex-row justify-start">
                <div className="h-16 border-l border-gray-200" />
                {
                    abouts.map((education) => (
                        <form onSubmit={handleSubmit} className="flex flex-row justify-start items-center gap-x-12">
                            {
                                education.aboutRole === "admin" ? (aboutToEdit ? (
                                    <>
                                        <div className="flex flex-row justify-start items-center lg:gap-x-2">
                                            <li className="w-4 h-4 z-10 border-1 border-gray-200 bg-gray-300 list-none rounded-full -ml-2"></li>
                                            <input className="p-1 bg-gray-200 rounded-xl font-roboto text-xs text-[#4e443c] border border-slate-200"
                                                type="text"
                                                name="aboutCollegeSession"
                                                value={formData.aboutCollegeSession}
                                                onChange={handleChange}
                                            />
                                            <button type="submit">
                                                <IoSaveOutline className="cursor-pointer" />
                                            </button>
                                        </div>
                                        <div className="flex flex-col justify-start items-start lg:gap-x-2">
                                            <div className="flex flex-row justify-start items-start">
                                                <input className="font-roboto text-xs text-black border border-slate-200"
                                                    type="text"
                                                    name="aboutCollegeCampus"
                                                    value={formData.aboutCollegeCampus}
                                                    onChange={handleChange}
                                                />
                                                <button type="submit">
                                                    <IoSaveOutline className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row justify-start items-start">
                                                <input className="text-[#4e443c] font-roboto text-xs border border-slate-200"
                                                    type="text"
                                                    name="aboutCollegeDegree"
                                                    value={formData.aboutCollegeDegree}
                                                    onChange={handleChange}
                                                />
                                                <button type="submit">
                                                    <IoSaveOutline className="cursor-pointer" />
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex flex-row justify-start items-center lg:gap-x-2">
                                            <li className="w-4 h-4 z-10 border-1 border-gray-200 bg-gray-300 list-none rounded-full -ml-2"></li>
                                            <li className="p-1 bg-gray-200 rounded-xl font-roboto text-xs list-none text-[#4e443c]">{education.aboutCollegeSession}</li>
                                            <button onClick={() => setAboutToEdit(education)}>
                                                    <CiEdit className="cursor-pointer" />
                                                </button>
                                        </div>
                                        <div className="flex flex-col justify-start items-start lg:gap-x-2">
                                            <div className="flex flex-row justify-start items-start">
                                                <li className="font-roboto text-xs text-black list-none">{education.aboutCollegeCampus}</li>
                                                <button onClick={() => setAboutToEdit(education)}>
                                                    <CiEdit className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row justify-start items-start">
                                                <li className="text-[#4e443c] font-roboto text-xs list-none">{education.aboutCollegeDegree}</li>
                                                <button onClick={() => setAboutToEdit(education)}>
                                                    <CiEdit className="cursor-pointer" />
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )

                                ) : (
                                    <>
                                        <div className="flex flex-row justify-start items-center lg:gap-x-2">
                                            <li className="w-4 h-4 z-10 border-1 border-gray-200 bg-gray-300 rounded-full list-none -ml-2"></li>
                                            <li className="p-1 bg-gray-200 rounded-xl font-roboto text-xs text-[#4e443c] list-none">{education.aboutCollegeSession}</li>
                                        </div>
                                        <div className="flex flex-col justify-start items-start">
                                            <li className="font-roboto text-xs text-black list-none">{education.aboutCollegeCampus}</li>
                                            <span className="text-[#4e443c] font-roboto text-xs">{education.aboutCollegeDegree}</span>
                                        </div>
                                    </>
                                )
                            }

                        </form>
                    ))
                }
            </div>
        </div>
    );
}

export default Education