import axios from 'axios'
import * as types from './actiontype'

var url = `https://5f1bfd2e254cec001608271f.mockapi.io/api/user`

export const listapi = () => {
    return dispatch => {
        return axios.get(url).then(res => {
            dispatch(showlist(res.data));
        })
    }
}
export const deleteapi = (id) => {
    return dispatch => {
        return axios.delete(url + `/${id}`).then(res => {
            dispatch(listapi())
        })
    }
}
export const addapi = (name, age) => {
    return dispatch => {
        return axios.post(url, {
            name: name, age: age
        }).then(res => {
            dispatch(listapi())
        })
    }
}
export const showlist = tasks => {
    return {
        type: types.LiST_ALL,
        tasks
    }
}