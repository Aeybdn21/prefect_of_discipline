import moment from "moment"
import { Actions } from "../../Actions"
const initState = {
    data: [],
    error: null,
    date: null
}

export const clinicRequest = (state = initState, action) =>  {
    switch(action.type){
        case Actions.CLINIC_REQUEST:
            return {...state, date: moment(new Date()).format('YYYY-mm-dd hh:mm A')};
        case Actions.CLINIC_REQUEST_SUCCESS:
            return {...state, data: action.data, error: false, date: moment(new Date()).format('YYYY-mm-dd hh:mm A'),}
        case Actions.CLINIC_REQUEST_FAILED: 
            return {...state, data: action.data, error: true, date: moment(new Date()).format('YYYY-mm-dd hh:mm A')}
        default: return state;
    }
}