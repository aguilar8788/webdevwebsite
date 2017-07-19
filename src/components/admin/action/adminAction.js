import axios from 'axios'
import {
    UPDATE_CONTACT_LIST,
    LOAD_CONTACTS
} from '../../../actions/actionTypes'

export function updateContactList(contacts) {
    return {type: UPDATE_CONTACT_LIST, contacts}
}

export function loadContacts(contacts) {
    return {type: LOAD_CONTACTS, contacts}
}
export function submitForm(formData) {
    return function(dispatch, getState) {
        console.log("delete", formData)
        return axios.delete(`http://localhost:8080/contact/${formData}`).then((res) => {
            console.log("delete", res)
            dispatch(updateContactList(res.data))
        })
    }
}

export function requestContacts() {
    return function(dispatch) {
        return axios.get(`http://localhost:8080/contact`).then(res => {
            console.log("ressss", res)
            dispatch(loadContacts(res.data))
        }).catch(error => {
            throw(error)
        })
    }
}
