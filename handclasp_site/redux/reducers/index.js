import { combineReducers } from 'redux';
import sendEmailReducer from './sendEmail';
import verifyEmailReducer from './verifyEmail';

const rootReducer = combineReducers({
    emailStatus: sendEmailReducer,
    validStatus: verifyEmailReducer
});

export default rootReducer;