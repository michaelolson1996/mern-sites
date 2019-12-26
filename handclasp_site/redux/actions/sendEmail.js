import axios from 'axios';
const emailAxios = axios.create();
const sendClientMessageURL = ('/api/email');

const returnMessageStatus = (res) => {
    return {
        type: "RETURN_MESSAGE_STATUS",
        status: res
    }
}

const sendClientMessage = clientMessage => {
    return dispatch => {
      return emailAxios.post(sendClientMessageURL, clientMessage).then(res => {
        dispatch(returnMessageStatus(res.data.success))
      })
      .catch((error) => {
        console.log(error + "\n error from sending email action")
        }
      );
    }
}

module.exports = sendClientMessage