let initialChildren = {};

export default (children = initialChildren, action) => {
    switch (action.type) {
        case "GET_CHILDREN":
            return action.data;
        case "CLEAR_MESSAGE_STATUS":
            return initialChildren;
        default:
            return children;
    };
};