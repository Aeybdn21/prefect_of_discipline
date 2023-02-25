import {combineReducers} from 'redux';
import {userInfo} from './authentication';
import { loaderComponent } from './components';

const rootReducer = combineReducers({
    userInfo,
    loaderComponent
});

export default rootReducer;