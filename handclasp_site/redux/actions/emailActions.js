import axios from 'axios';
const emailAxios = axios.create();
const sendClientMessageURL = ('/api/email');

const returnMessageStatus = () => {
    return {
        type: "RETURN_MESSAGE_STATUS"
    }
}

const sendClientMessage = clientMessage => {
    console.log(clientMessage)
    return dispatch => {
        return emailAxios.post(sendClientMessageURL, clientMessage).then(res => {
          console.log(res);
          dispatch(returnMessageStatus())
        })
        .catch((error) => {
          console.log(error)
            // switch (error.response.status) {
              // case 422:
              // alert(error.response.data.meta.message);
              //   break;
              // case 401:
              // alert(error.response.data.meta.message);
              //   break;
              // case 500:
              // alert('Interval server error! Try again!');
              //   break;
              // default:
              // alert('Uh OH');
              //   break;
            }
          );
    }
}

module.exports = sendClientMessage