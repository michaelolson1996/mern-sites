import { combineReducers } from 'redux';
import sendEmailReducer from './sendEmail';
import verifyEmailReducer from './verifyEmail';
import projects from './getProjects';
import childrenReducer from './getChildren';

const rootReducer = combineReducers({
    emailStatus: sendEmailReducer,
    validStatus: verifyEmailReducer,
    data: projects,
    children: childrenReducer
});

export default rootReducer;