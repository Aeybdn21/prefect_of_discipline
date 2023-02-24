import {combineReducers} from 'redux';
import {userInfo} from './authentication';

const rootReducer = combineReducers({
    userInfo
});

export default rootReducer;