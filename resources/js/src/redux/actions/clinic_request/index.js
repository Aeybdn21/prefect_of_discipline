import axios from "axios"
import { Actions } from "../../Actions";

export const clinicReport = (params) => dispatch => {
    return axios.post(params).then((response) => {
        dispatch({type: Actions.CLINIC_REQUEST_SUCCESS, data: response.data.clinic_request});
        return Promise.resolve(response);
    }).catch((error) => {
        dispatch({type: Actions.CLINIC_REQUEST_FAILED, data: error});
        return Promise.reject(error);
    });
};

export const approveDecline = (params) => dispatch => {
    return axios.post(params.url, params.payload).then((response) => {
        return Promise.resolve(response);
    }).catch((error) => {
        return Promise.reject(error);
    })
}