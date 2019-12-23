import { combineReducers } from 'redux';
import sendEmailReducer from './sendEmail';

const rootReducer = combineReducers({
    emailStatus: sendEmailReducer,
});

export default rootReducer;