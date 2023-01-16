import axios from 'axios';

export async function contactApi(data) {
    return new Promise((resole, reject) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/contactus/create`, data
            ).then((res) => {
                resole(res)
            }).catch((err) => {
                reject(err)
            })
    })
}