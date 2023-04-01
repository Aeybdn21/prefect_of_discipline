import {combineReducers} from 'redux';
import { Actions } from '../Actions';
import {userInfo} from './authentication';
import { loaderComponent } from './components';
import { caseStatuses, categoryCase } from './utilities';
import { clinicRequest } from './clinic_request';

const rootReducer = combineReducers({
    userInfo,
    loaderComponent,
    caseStatuses,
    categoryCase,
    clinicRequest
});

const appReducer = (state, action) => {
    if (action.type === Actions.USER_LOGOUT) {
      return rootReducer(undefined, action)
    } 
    return rootReducer(state, action);
  }

export default appReducer;