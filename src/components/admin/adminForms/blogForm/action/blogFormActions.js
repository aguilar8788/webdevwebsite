import axios from 'axios'

export function submitForm(formData) {
    return function(dispatch, getState) {
        // let postObject = {
        //     "firstName": formData.firstName,
        //     "lastName": formData.lastName,
        //     "phoneNumber": formData.phoneNumber,
        //     "company": formData.company ? formData.company : ""
        // }
        // return axios.post("http://localhost:8080/contact", postObject)
    }
}
