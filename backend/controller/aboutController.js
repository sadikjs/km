import About from "../model/about.js";

export const getAbout = async (req, res) => {
    try {
        const about = await About.find({}).lean();
        res.status(201).json(about);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const updateAbout = async (req, res) => {
    const { id } = req.params;
    const { aboutName,
        aboutOccupation,
        aboutContent,
        aboutDateOfBirth,
        aboutAge,
        aboutAddress,
        aboutEmail,
        aboutPhone,
        aboutNationality,
        aboutStudy,
        aboutInterest,
        aboutReligion,
        aboutMasterSession,
        aboutMasterUniversity,
        aboutMasterDegree,
        aboutBachelorSession,
        aboutBachelorUniversity,
        aboutBachelorDegree,  
        aboutCollegeSession,
        aboutCollegeCampus,
        aboutCollegeDegree
    } = req.body
    try {
        const about = await About.findByIdAndUpdate(id, {
            aboutName,
            aboutOccupation,
            aboutContent,
            aboutDateOfBirth,
            aboutAge,
            aboutAddress,
            aboutEmail,
            aboutPhone,
            aboutNationality,
            aboutStudy,
            aboutInterest,
            aboutReligion,
            aboutMasterSession,
            aboutMasterUniversity,
            aboutMasterDegree,
            aboutBachelorSession,
            aboutBachelorUniversity,
            aboutBachelorDegree,
            aboutCollegeSession,
        aboutCollegeCampus,
        aboutCollegeDegree
        }, { new: true });
        if (!about) {
            res.status(404).json({ error: "not found" })
        }
        res.status(200).json(about);

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}