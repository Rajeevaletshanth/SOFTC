import axios from 'axios';
// import getAccessToken from './AccessToken';

export async function loginApi(data) {
    return new Promise((resole, reject) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`, data
            ).then((res) => {
                resole(res)
            }).catch((err) => {
                reject(err)
            })
    })
}

export async function registerApi(data) {
    return new Promise((resole, reject) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/user/register`, data
            ).then((res) => {
                resole(res)
            }).catch((err) => {
                reject(err)
            })
    })
}
