import request from '../utils/request'

export function getLogin(form) {
    return request ({
        url: 'http://127.0.0.1:8000/login',
        method: 'post',
        data: {
            username: form.username,
            password: form.password
        }
    })
}



