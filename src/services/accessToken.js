export default function getAccessToken () {
    if(localStorage.getItem('user')){
        let auth = JSON.parse(localStorage.getItem('user')).auth
        let token = JSON.parse(auth).session.token;
        return token;
    }else{
        return 0;
    }
}