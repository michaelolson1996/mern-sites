const initialMessageStatus = []

export default (messageStatus = initialMessageStatus, action) => {
    switch (action.type) {
        case "RETURN_MESSAGE_STATUS":
            return [action.status]
        default:
            return messageStatus
    }
}