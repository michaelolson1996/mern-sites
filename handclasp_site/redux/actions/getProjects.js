import axios from 'axios';
const projectsAxios = axios.create();
const getProjectsURL = ('/api/projects');

const returnProjects = (res) => {
    return {
        type: "GET_PROJECTS",
        data: res.data
    }
}

const clearProjects = () => {
  return {
    type: "CLEAR_PROJECTS"
  }
}

const getProjects = () => {
    return dispatch => {
      projectsAxios.get(getProjectsURL).then(res => {
        console.log(res)
        dispatch(returnProjects(res))
      })
      .catch((error) => {
        console.log(error + "\n error from getting projects action")
        }
      );
    }
}

module.exports = {
  getProjects
} 