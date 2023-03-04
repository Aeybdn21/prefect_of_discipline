import { Actions } from "../../Actions"

const initState = {
    caseStatusData: [],
    error: false,
}


export const caseStatuses = (state = initState, action) => {
    switch(action.type) {
        case Actions.CASE_PARTIES: return {...state, caseStatusData: action.data};
        default: return state;
    }
}