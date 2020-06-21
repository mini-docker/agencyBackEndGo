import axios from '../utils/request';
import api from './index';


function getAgenActList(post) {
    return axios.post(api.AGENCY_QUERY_AGENCY_LIST, post).then(res => {
        return res.data
    })
}
function addAgeAct(post){
    return axios.post(api.AGENCY_ADD_AGENCY, post).then(res => {
        return res.data
    })
}
function updAgeAct(post){
    return axios.post(api.AGENCY_EDIT_AGENCY, post).then(res => {
        return res.data
    })
}
function updAgeActStatus(post) {
    return axios.post(api.AGENCY_EDIT_AGENCY_STATUS, post).then(res => {
        return res.data
    })
}
function resetAgeActpwd(post) {
    return axios.post(api.AGENCY_RESET_AGENCY_PASSWORD, post).then(res => {
        return res.data
    })
}
function delAgeAct(post) {
    return axios.post(api.AGENCY_DEL_AGENCY, post).then(res => {
        return res.data
    })
}
function getAgeActDet(post){
    return axios.post(api.AGENCY_QUERY_AGENCY_ONE, post).then(res => {
        return res.data
    })
}

function getAgeGList(post) {
    return axios.post(api.AGENCY_QUERY_ROOM_LIST, post).then(res => {
        return res.data
    })
}
function addAgeG(post) {
    return axios.post(api.AGENCY_ADD_ROOM, post).then(res => {
        return res.data
    })
}
function getAgeGOne(post) {
    return axios.post(api.AGENCY_QUERY_ROOM_ONE, post).then(res => {
        return res.data
    })
}
function updAgeG(post) {
    return axios.post(api.AGENCY_EDIT_ROOM, post).then(res => {
        return res.data
    })
}
function updAgeGStatus(post) {
    return axios.post(api.AGENCY_EDIT_ROOM_STATUS, post).then(res => {
        return res.data
    })
}
function delAgeG(post) {
    return axios.post(api.AGENCY_DEL_ROOM, post).then(res => {
        return res.data
    })
}
function getAgeList(post) {
    return axios.post(api.AGENCY_LIST, post).then(res => {
        return res.data
    })
}

function userList(post) {
    return axios.post(api.AGENCY_USERLIST, post).then(res => {
        return res.data
    })
}

function KICKUSER(postdata) {
    return axios.post(api.AGENCY_KICKUSERS, postdata).then(res => {
        return res.data
    })
}

function userStatus(postdata) {
    return axios.post(api.AGENCY_EDITUSERSTATUS, postdata).then(res => {
        return res.data
    })
}
function addRed(post) {
    return axios.post(api.AGENCY_ADD_RED, post).then(res => {
        return res.data
    })
}


function agentNormalList(post) {
    return axios.post(api.AGENCY_ORDINARY_RED_LIST, post).then(res => {
        return res.data
    })
}

function agentNormalEdit(postdata) {
    return axios.post(api.AGENCY_ORDINARY_RED_EDIT, postdata).then(res => {
        return res.data
    })
}

function agentNormalInfo(postdata) {
    return axios.post(api.AGENCY_ORDINARY_RED_INFO, postdata).then(res => {
        return res.data
    })
}
function agentNormalDel(post) {
    return axios.post(api.AGENCY_ORDINARY_RED_DEL, post).then(res => {
        return res.data
    })
}

function agentRobotList(post) {
    return axios.post(api.AGENCY_ROBOT_LIST, post).then(res => {
        return res.data
    })
}

function agentRobotAct(postdata) {
    return axios.post(api.AGENCY_ROBOT_GET_ROBOT_ACCOUNTS, postdata).then(res => {
        return res.data
    })
}

function agentRobotInsert(postdata) {
    return axios.post(api.AGENCY_ROBOT_INSERT_ROBOTS, postdata).then(res => {
        return res.data
    })
}
function agentRobotDel(post) {
    return axios.post(api.AGENCY_ROBOT_DEL_ROBOTS, post).then(res => {
        return res.data
    })
}
function memmanualHandOut(post) {
    return axios.post(api.AGENCY_MEM_MANUAL, post).then(res => {
        return res.data
    })
}




export {
    getAgenActList,
    addAgeAct,
    updAgeAct,
    updAgeActStatus,
    resetAgeActpwd,
    delAgeAct,
    getAgeActDet,
    getAgeGList,
    addAgeG,
    getAgeGOne,
    updAgeG,
    updAgeGStatus,
    delAgeG,
    getAgeList,
    userList,
    KICKUSER,
    userStatus,
    addRed,
    agentNormalList,
    agentNormalEdit,
    agentNormalInfo,
    agentNormalDel,
    agentRobotList,
    agentRobotAct,
    agentRobotInsert,
    agentRobotDel,
    memmanualHandOut

}   