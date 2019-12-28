let initialEmailStatus = {};

export default (status = initialEmailStatus, action) => {
    switch (action.type) {
        case "RETURN_MESSAGE_STATUS":
            return {status: action.status};
        case "CLEAR_MESSAGE_STATUS":
            return initialEmailStatus;
        default:
            return status;
    };
};