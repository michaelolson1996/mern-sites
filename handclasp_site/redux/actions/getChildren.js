import axios from 'axios';
const childrenAxios = axios.create();
const getChildrenURL = ('/api/children');

const returnChildren = (res) => {
    return {
        type: "GET_CHILDREN",
        data: res.data
    }
}

const clearChildren = () => {
  return {
    type: "CLEAR_CHILDREN"
  }
}

const getChildren = () => {
    return dispatch => {
      childrenAxios.get(getChildrenURL).then(res => {
        console.log(res)
        dispatch(returnChildren(res))
      })
      .catch((error) => {
        console.log(error + "\n error from getting children action")
        }
      );
    }
}

module.exports = {
  getChildren
} 