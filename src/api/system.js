


import axios from '../utils/request';
import api from './index';

function agencyqueSys(post) {
    return axios.post(api.AGENCY_QUERY_SYSTEM_CONF, post).then(res => {
        return res.data
    })
}
function agencySysConf(post) {
    return axios.post(api.AGENCY_SYSTEM_CONF, post).then(res => {
        return res.data
    })
}
function addKillUser(post) {
    return axios.post(api.AGENCY_ADD_KILL_USER, post).then(res => {
        return res.data
    })
}
function delKillUser(post) {
    return axios.post(api.AGENCY_DEL_KILL_USER, post).then(res => {
        return res.data
    })
}



export {
    agencySysConf,
    agencyqueSys,
    addKillUser,
    delKillUser,
    
}
