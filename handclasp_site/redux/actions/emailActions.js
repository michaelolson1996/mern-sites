import axios from 'axios';
const emailAxios = axios.create();
const sendClientMessageURL = ('/api/email');

const returnMessageStatus = (res) => {
    return {
        type: "RETURN_MESSAGE_STATUS",
        status: res.data
    }
}

const sendClientMessage = clientMessage => {
    return dispatch => {
      return emailAxios.post(sendClientMessageURL, clientMessage).then(res => {
        dispatch(returnMessageStatus(res))
      })
      .catch((error) => {
        console.log(error + "\n hello world I am an error")
        }
      );
    }
}

module.exports = sendClientMessage