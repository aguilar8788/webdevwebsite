import axios from 'axios'
import {
    LOAD_BLOG_DATA,
    LOAD_CONTACTS,
    LOAD_PORTFOLIO_DATA,
    UPDATE_BLOG_DATA,
    UPDATE_CONTACT_LIST
} from '../../../actions/actionTypes'
import {serverRequest} from "../../../browserUtils/utils";

export function updateContactList(contacts) {
    return {type: UPDATE_CONTACT_LIST, contacts}
}

export function updateBlogList(blogData) {
    return {type: UPDATE_BLOG_DATA, blogData}
}

export function loadContacts(contacts) {
    return {type: LOAD_CONTACTS, contacts}
}

export function loadBlogData(blogData) {
    return {type: LOAD_BLOG_DATA, blogData}
}

export function loadPortfolio(portfolioData) {
    return {type: LOAD_PORTFOLIO_DATA, portfolioData}
}

export function deleteFromDB(formData, route) {
    let Url = serverRequest()
    return function(dispatch, getState) {
        return axios.delete(`${Url}/${route}/${formData}`).then((res) => {
            switch(route) {
                case "contact":
                    dispatch(updateContactList(res.data))
                    break
                case "blog":
                    dispatch(updateBlogList(res.data))
                    break
                default:
                    return false
            }
        })
    }
}

export function requestContacts() {
    let Url = serverRequest()
    return function(dispatch) {
        return axios.get(`${Url}/contact`).then(res => {
            dispatch(loadContacts(res.data))
        }).catch(error => {
            throw(error)
        })
    }
}

export function requestBlog() {
    let Url = serverRequest()
    return function(dispatch) {
        return axios.get(`${Url}/blog`).then(res => {
            dispatch(loadBlogData(res.data))
        }).catch(error => {
            throw(error)
        })
    }
}

export function requestPortfolio() {
    let Url = serverRequest()
    return function(dispatch) {
        return axios.get(`${Url}/portfolio`).then(res => {
            dispatch(loadPortfolio(res.data))
        }).catch(error => {
            throw(error)
        })
    }
}
