import {combineReducers} from 'redux';
import { Actions } from '../Actions';
import {userInfo} from './authentication';
import { loaderComponent } from './components';

const rootReducer = combineReducers({
    userInfo,
    loaderComponent
});

const appReducer = (state, action) => {
    if (action.type === Actions.USER_LOGOUT) {
      return rootReducer(undefined, action)
    } 
    return rootReducer(state, action);
  }

export default appReducer;