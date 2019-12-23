// import {RETURN_MESSAGE_STATUS} from '../actions/emailActions'

let initialMessageStatus = {};

export default (messageStatus = initialMessageStatus, action) => {
    switch (action.type) {
        case "RETURN_MESSAGE_STATUS":
            return {status: action.status};
        default:
            return messageStatus;
    };
};