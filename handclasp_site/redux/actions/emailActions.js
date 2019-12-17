import axios from 'axios';
const emailAxios = axios.create();
const sendClientMessageURL = ('/api/email');

const returnMessageStatus = () => {
    return {
        type: "RETURN_MESSAGE_STATUS",
        status: 200
    }
}

const sendClientMessage = clientMessage => {
    console.log(clientMessage)
    return dispatch => {
      return emailAxios.post(sendClientMessageURL, clientMessage).then(res => {
        console.log(res)
        dispatch(returnMessageStatus())
      })
      .catch((error) => {
        console.log(error + "\n hello world I am an error")
        }
      );
    }
}

module.exports = sendClientMessage