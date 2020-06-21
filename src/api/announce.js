import axios from '../utils/request';
import api from './index';


function getAnno(post) {
    return axios.post(api.AGENCY_QUERY_POST_LIST, post).then(res => {
        return res.data
    })
}
function addAnno(post) {
    return axios.post(api.AGENCY_ADD_POST, post).then(res => {
        return res.data
    })
}
function editAnno(post) {
    return axios.post(api.AGENCY_EDIT_POST, post).then(res => {
        return res.data
    })
}
function editAnnoStatus(post) {
    return axios.post(api.AGENCY_EDIT_POST_STATUS, post).then(res => {
        return res.data
    })
}
function delAnno(post) {
    return axios.post(api.AGENCY_DEL_POST, post).then(res => {
        return res.data
    })
}
function getAnnoOne(post) {
    return axios.post(api.AGENCY_QUERY_POST_BY_ID, post).then(res => {
        return res.data
    })
}


function getActivity(post) {
    return axios.post(api.AGENCY_QUERY_ACTIVE_LIST, post).then(res => {
        return res.data
    })
}
function addActivity(post) {
    return axios.form(api.AGENCY_ADD_ACTIVE, post).then(res => {
        return res.data
    })
}
function getActivityOne(post) {
    return axios.post(api.AGENCY_QUERY_ACTIVE_BY_ID, post).then(res => {
        return res.data
    })
}
function editActivity(post) {
    return axios.form(api.AGENCY_EDIT_ACTIVE, post).then(res => {
        return res.data
    })
}
function editActivityStatus(post) {
    return axios.post(api.AGENCY_EDIT_ACTIVE_STATUS, post).then(res => {
        return res.data
    })
}
function delActivity(post) {
    return axios.post(api.AGENCY_DEL_ACTIVE, post).then(res => {
        return res.data
    })
}
function uploadImg(post){
    return axios.form(api.AGENCY_UPLOAD, post).then(res => {
        return res.data
    })
    
}


export{
    getAnno,
    addAnno,
    editAnno,
    editAnnoStatus,
    delAnno,
    getAnnoOne,
    uploadImg,
    getActivity,
    addActivity,
    getActivityOne,
    editActivity,
    editActivityStatus,
    delActivity
}