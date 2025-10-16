import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { format } from "date-fns";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from "../../redux/about/thunk/fetchAbout.js";
import { updateAbout } from "../../redux/about/thunk/updateAbout.js";
import { IoSaveOutline } from "react-icons/io5";
function Info() {
    const { abouts, error, loading } = useSelector((state) => state.about)
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
        <div className="w-full flex flex-col justify-start items-start py-4 lg:flex-row">
            <div className="w-[calc(100%-20%)] lg:w-[calc(100%-50%)] flex flex-row justify-start gap-x-3">
                <div>
                    <div className="flex flex-col justify-start items-start gap-y-1.5">
                        <p className="font-roboto text-base font-semibold">Birthday:</p>
                        <p className="font-roboto text-base font-semibold">Age:</p>
                        <p className="font-roboto text-base font-semibold">Address:</p>
                        <p className="font-roboto text-base font-semibold">Email:</p>
                        <p className="font-roboto text-base font-semibold">Phone:</p>
                    </div>
                </div>
                <div>
                    {
                        abouts.map((info) => (
                            <form onSubmit={handleSubmit} key={info._id} className="flex flex-col justify-start items-start gap-y-1.5">
                                {
                                    info.aboutRole === "admin" ? (aboutToEdit ? (
                                        <>
                                            <div className="flex flex-row justify-start items-start">
                                                <input
                                                    className="font-roboto text-base text-[#4e443c] border border-slate-200"
                                                    type="date"
                                                    name="aboutDateOfBirth"
                                                    value={formData.aboutDateOfBirth}
                                                    onChange={handleChange}
                                                />
                                                <button type="submit">
                                                    <IoSaveOutline className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row justify-start items-start">
                                                <input
                                                    className="font-roboto text-base text-[#4e443c] border border-slate-200"
                                                    type="text"
                                                    name="aboutAge"
                                                    value={formData.aboutAge}
                                                    onChange={handleChange}
                                                />
                                                <button type="submit">
                                                    <IoSaveOutline className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row justify-start items-start">
                                                <input
                                                    type="text"
                                                    className="font-roboto text-base text-[#4e443c] border border-slate-200"
                                                    name="aboutAddress"
                                                    value={formData.aboutAddress}
                                                    onChange={handleChange}
                                                />
                                                <button type="submit">
                                                    <IoSaveOutline className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row justify-start items-start">
                                                <input
                                                    type="text"
                                                    className="font-roboto text-base text-[#4e443c] border border-slate-200"
                                                    name="aboutEmail"
                                                    value={formData.aboutEmail}
                                                    onChange={handleChange}
                                                />
                                                <button type="submit">
                                                    <IoSaveOutline className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row justify-start items-start">
                                                <input
                                                    type="text"
                                                    className="font-roboto text-base text-[#4e443c] border border-slate-200"
                                                    name="aboutPhone"
                                                    value={formData.aboutPhone}
                                                    onChange={handleChange}
                                                />
                                                <button type="submit">
                                                    <IoSaveOutline className="cursor-pointer" />
                                                </button>
                                            </div>
                                        </>
                                    ) : (

                                        <>
                                            <div className="flex flex-row justify-start items-start">
                                                <p className="font-roboto text-base text-[#4e443c]">
                                                    {info.aboutDateOfBirth
                                                        ? format(new Date(info.aboutDateOfBirth), "dd-MM-yyyy")
                                                        : "null"}
                                                </p>
                                                <button onClick={() => setAboutToEdit(info)}>
                                                    <CiEdit className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row justify-start items-start">
                                                <p className="font-roboto text-base text-[#4e443c]">{info.aboutAge}</p>
                                                <button onClick={() => setAboutToEdit(info)}>
                                                    <CiEdit className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row justify-start items-start">
                                                <p className="font-roboto text-base text-[#4e443c]">{info.aboutAddress}</p>
                                                <button onClick={() => setAboutToEdit(info)}>
                                                    <CiEdit className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row justify-start items-start">
                                                <p className="font-roboto text-base text-[#4e443c]">{info.aboutEmail}</p>
                                                <button onClick={() => setAboutToEdit(info)}>
                                                    <CiEdit className="cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex flex-row font-roboto text-base text-[#4e443c]">
                                                <p className="font-roboto text-base text-[#4e443c]">{info.aboutPhone}</p>
                                                <button onClick={() => setAboutToEdit(info)}>
                                                    <CiEdit className="cursor-pointer" />
                                                </button>
                                            </div>
                                        </>
                                    )
                                    ) : (
                                        <>
                                            <p className="font-roboto text-base text-[#4e443c]">
                                                {info.aboutDateOfBirth
                                                    ? format(new Date(info.aboutDateOfBirth), "dd-MM-yyyy")
                                                    : "null"}
                                            </p>
                                            <p className="font-roboto text-base text-[#4e443c]">{info.aboutAge}</p>
                                            <p className="font-roboto text-base text-[#4e443c]">{info.aboutAddress}</p>
                                            <p className="font-roboto text-base text-[#4e443c]">{info.aboutEmail}</p>
                                            <p className="font-roboto text-base text-[#4e443c]">{info.aboutPhone}</p>
                                        </>
                                    )
                                }
                            </form>
                        ))
                    }
                </div>
            </div>
            <form onSubmit={handleSubmit} className="w-[calc(100%-20%)] lg:w-[calc(100%-50%)]  flex flex-row justify-start gap-x-3">
                <div className="flex flex-col justify-start items-start gap-y-1.5">
                    <th className="font-roboto text-base">Nationality:</th>
                    <th className="font-roboto text-base">Study:</th>
                    <th className="font-roboto text-base">Inrerest:</th>
                    <th className="font-roboto text-base">Religion:</th>
                </div>
                {abouts.map((edu) => (
                    <div key={edu._id} className="flex flex-col justify-start items-start gap-y-1.5">
                        {
                            edu.aboutRole === "admin" ? (aboutToEdit ? (
                                <>
                                    <div className="flex flex-row justify-start items-start">
                                        <input
                                            type="text"
                                            className="font-roboto text-base text-[#4e443c] border border-slate-200"
                                            name="aboutNationality"
                                            value={formData.aboutNationality}
                                            onChange={handleChange}
                                        />
                                        <button type="submit">
                                            <IoSaveOutline className="cursor-pointer" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row justify-start items-start">
                                        <input
                                            type="text"
                                            className="font-roboto text-base text-[#4e443c] border border-slate-200"
                                            name="aboutStudy"
                                            value={formData.aboutStudy}
                                            onChange={handleChange}
                                        />
                                        <button type="submit">
                                            <IoSaveOutline className="cursor-pointer" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row justify-start items-start">
                                        <input
                                            type="text"
                                            className="font-roboto text-base text-[#4e443c] border border-slate-200"
                                            name="aboutInterest"
                                            value={formData.aboutInterest}
                                            onChange={handleChange}
                                        />
                                        <button type="submit">
                                            <IoSaveOutline className="cursor-pointer" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row justify-start items-start">
                                        <input
                                            type="text"
                                            className="font-roboto text-base text-[#4e443c] border border-slate-200"
                                            name="aboutReligion"
                                            value={formData.aboutReligion}
                                            onChange={handleChange}
                                        />
                                        <button type="submit">
                                            <IoSaveOutline className="cursor-pointer" />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-row justify-start items-start">
                                        <p className="font-roboto text-base text-[#4e443c]">{edu.aboutNationality}</p>
                                        <button onClick={() => setAboutToEdit(edu)}>
                                            <CiEdit className="cursor-pointer" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row justify-start items-start">
                                        <p className="font-roboto text-base text-[#4e443c]">{edu.aboutStudy}</p>
                                        <button onClick={() => setAboutToEdit(edu)}>
                                            <CiEdit className="cursor-pointer" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row justify-start items-start">
                                        <p className="font-roboto text-base text-[#4e443c]">{edu.aboutInterest}</p>
                                        <button onClick={() => setAboutToEdit(edu)}>
                                            <CiEdit className="cursor-pointer" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row justify-start items-start">
                                        <p className="font-roboto text-base text-[#4e443c]">{edu.aboutReligion}</p>
                                        <button onClick={() => setAboutToEdit(edu)}>
                                            <CiEdit className="cursor-pointer" />
                                        </button>
                                    </div>
                                    <td className="font-roboto text-base text-[#4e443c]">{""}</td>
                                    <td className="font-roboto text-base text-[#4e443c]">{""}</td>
                                    <td className="font-roboto text-base text-[#4e443c]">{""}</td>
                                    <td className="font-roboto text-base text-[#4e443c]">{""}</td>
                                </>
                            )

                            ) : (
                                <>
                                    <p className="font-roboto text-base text-[#4e443c]">{edu.aboutNationality}</p>
                                    <p className="font-roboto text-base text-[#4e443c]">{edu.aboutStudy}</p>
                                    <p className="font-roboto text-base text-[#4e443c]">{edu.aboutInterest}</p>
                                    <p className="font-roboto text-base text-[#4e443c]">{edu.aboutReligion}</p>
                                </>
                            )
                        }
                    </div>
                ))}
            </form>
        </div>
    );
}

export default Info