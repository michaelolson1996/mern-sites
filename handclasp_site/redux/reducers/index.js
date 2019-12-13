import { combineReducers } from 'redux';
import sendEmailReducer from './sendEmail';

const rootReducer = combineReducers({
    sendEmail: sendEmailReducer,
});

export default rootReducer;