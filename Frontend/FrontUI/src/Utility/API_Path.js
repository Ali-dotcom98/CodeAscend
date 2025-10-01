export const BASE_URL = "http://localhost:3000";

export const API_PATHS = {
    AUTH: {
        REGISTER: "Auth/register",
        LOGIN: "/Auth/login",
        GET_PROFILE: "/Auth/profile"
    },

    CHALLENGE: {
        CREATE: "/Chlg/Create",
        GET_ALL: "/Chlg/GetAll",
        GET_ALL_DASHBOARD: "/Chlg/GetDashboard",
        GET_BY_ID: (id) => `/Chlg/GetAll/${id}`,
        GET_PUBLIC_CHALLENGE: "/Chlg/GetAllWithPublic",
        GET_LEADERBOARD: "/Chlg/GetLeaderBoardData",
        UPDATE: (id) => `/Chlg/Update/${id}`,
        DELETE: (id) => `/Chlg/Delete/${id}`,
        DELETE_LIST: "/Chlg/DeleteList",
        UPLOAD_IMAGES: (id) => `/Chlg/${id}/upload-image`

    },
    CODE: {
        CREATE: "/Code/Create",
        GET_ALL_BY_INSTRUCTOR: "/Code/GetAllByInstructor",
        GET_ALL_BY_STUDENT: `/Code/StudentSubmission`,
        GET_PUBLIC_CHALLENGE: "/Code/Chlg/GetAllWithPublic",
        GET_TOP_PERFORMER: "Code/top3-submissions",
        GET_CHALLENGE_PERFORMER: (id) => `Code/ranking/${id}`,
        UPDATE: (id) => `/Code/Update/${id}`,
        DELETE: (id) => `/Code/Delete/:id/${id}`,
    },

    IMAGE: {
        UPLOAD_IMAGE: "/Auth/uploadImg"
    }
};
