import Router from 'next/router'
import axios from 'axios'
const emailAxios = axios.create()
const sendClientMessageURL = ('/email')

const returnMessageStatus = status => {
    return {
        type: "RETURN_MESSAGE_STATUS",
        status
    }
}

const sendClientMessage = clientMessage => {
    console.log(clientMessage)
    return dispatch => {
        return emailAxios.post(sendClientMessageURL, clientMessage).then(res => {
            dispatch(returnMessageStatus(res))
            console.log(response.data.meta.message);
        })
        .catch((err) => {
            switch (error.response.status) {
              case 422:
              alert(error.response.data.meta.message);
                break;
              case 401:
              alert(error.response.data.meta.message);
                break;
              case 500:
              alert('Interval server error! Try again!');
                break;
              default:
              alert(error.response.data.meta.message);
                break;
            }
          });
    }
}

module.exports = sendClientMessage