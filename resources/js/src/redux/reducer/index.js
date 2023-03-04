import {combineReducers} from 'redux';
import { Actions } from '../Actions';
import {userInfo} from './authentication';
import { loaderComponent } from './components';
import { caseStatuses } from './utilities';

const rootReducer = combineReducers({
    userInfo,
    loaderComponent,
    caseStatuses
});

const appReducer = (state, action) => {
    if (action.type === Actions.USER_LOGOUT) {
      return rootReducer(undefined, action)
    } 
    return rootReducer(state, action);
  }

export default appReducer;