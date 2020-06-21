import axios from '../utils/request';
import api from './index';

function getAGEorderList(post) {
    return axios.post(api.AGE_ORDERLIST, post).then(res => {
        return res.data
    })
}
function getAGEorderDet(post){
    return axios.post(api.AGE_ORDERDET, post).then(res => {
        return res.data
    })
}
function getRoomCode(post){
    return axios.post(api.AGENCY_ROOM_CODE, post).then(res => {
        return res.data
    })
}
function redSline(post){
    return axios.post(api.AGENCY_ORDER_STATISTICAL, post).then(res => {
        return res.data
    })
}
function manualHandOut(post) {
    return axios.post(api.AGENCY_MANUAL_HAND_OUT, post).then(res => {
        return res.data
    })
}


export {
    getAGEorderList,
    getAGEorderDet,
    getRoomCode,
    redSline,
    manualHandOut,
}