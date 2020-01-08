let initialProjects = {};

export default (projects = initialProjects, action) => {
    switch (action.type) {
        case "GET_PROJECTS":
            return action.data;
        case "CLEAR_MESSAGE_STATUS":
            return initialProjects;
        default:
            return projects;
    };
};