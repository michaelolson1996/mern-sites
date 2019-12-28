import axios from 'axios';
const verifyAxios = axios.create();
const verifyUrl = ("/api/verify");

const returnValidStatus = (res) => {
    return {
        type: "RETURN_VALID_STATUS",
        status: res
    }
}

const clearValidStatus = () => {
  return {
    type: "CLEAR_VALID_STATUS"
  }
}

const verifyEmail = clientEmail => {
    console.log(clientEmail)
    return dispatch => {
      return verifyAxios.post(verifyUrl, clientEmail).then(res => {
        dispatch(returnValidStatus(res.data));
        dispatch(clearValidStatus())
      })
      .catch((error) => {
        console.log(error + "\n error from verify action");
        }
      );
    };
};

module.exports = {
  verifyEmail
} 