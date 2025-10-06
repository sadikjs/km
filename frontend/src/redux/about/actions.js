import { ABOUT_ADDED, ABOUT_UPDATE } from "./actionTypes";

export const getAbout = (about) => {
    return {
        type: ABOUT_ADDED,
        payload: about,
    };
};

export const aboutUpdate = (update) => {
    return {
        type: ABOUT_UPDATE,
        payload: update,
    };
};

