import axios from '../utils/request';
import api from './index';


function getLogin(post) {
    return axios.post(api.AGENCY_LOGIN, post).then(res => {
        return res.data
    })
}
function logOut(post) {
    return axios.post(api.AGENCY_LOGOUT, post).then(res => {
        return res.data
    })
}
// function getMenuOwn(){
//     return axios.post(api.AGENCY_OWNER).then(res => {
//         return res.data
//     })
// }
function modifyPwd(post) {
    return axios.post(api.MODIFY_PWD, post).then(res => {
        return res.data
    })
}

export {
    getLogin,
    logOut,
    // getMenuOwn,
    modifyPwd,
}   