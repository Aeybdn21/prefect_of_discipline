import { Actions } from "../../Actions";
import moment from "moment";

const initState = {
    data: [],
    error: false,
    success: false,
    loading: false,
    lastUpdate: '',
    message: ''
}

export const userInfo = (state = initState, action ) => {
    switch(action.type){
        case Actions.USER_INFO:
            return {...state, loading: true, message: action.message, lastUpdate: moment().format('MMM dd, YYYY hh:mm A')};
        case Actions.USER_INFO_SUCCESS:
            return {...state, data: action.data, message: action.message,lastUpdate: moment().format('MMM dd, YYYY hh:mm A')}
        case Actions.USER_INFO_ERROR:
            return {...state, data: action.data};
        default: return state;
    }
} 