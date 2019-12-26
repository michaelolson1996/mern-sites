const initialValidStatus = {}

export default (status = initialValidStatus, action) => {
    switch (action.type) {
        case "RETURN_VALID_STATUS":
            return {status: action.status}
        default:
            return status
    }
}