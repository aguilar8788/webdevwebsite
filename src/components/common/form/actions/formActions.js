import axios from 'axios'
import {
    FORM_SUBMISSION_FAILED,
    FORM_SUBMISSION_SUCCESS
} from '../../../../actions/actionTypes'

export function formSubmissionSuccessful(success) {
    return {type: FORM_SUBMISSION_SUCCESS, success}
}

export function formSubmissionFailed(failure) {
    return {type: FORM_SUBMISSION_FAILED, failure}
}

export function submitForm(formData) {
    return function(dispatch, getState) {
        let postObject = {
            "firstName": formData.firstName,
            "lastName": formData.lastName,
            "phoneNumber": formData.phoneNumber,
            "company": formData.company ? formData.company : ""
        }
        return axios.post("http://localhost:8080/contact", postObject).then((res) => {
            if (res.status == 200) {
                dispatch(formSubmissionSuccessful("success"))
            }
        }).catch(error => {
            dispatch(formSubmissionFailed({error : {"failure": error}}))
        })
    }
}
