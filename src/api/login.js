import request from '../utils/request'

export function getLogin(form) {
    return request ({
        url: '/login',
        method: 'post',
        data: {
            username: form.username,
            password: form.password
        }
    })
}



