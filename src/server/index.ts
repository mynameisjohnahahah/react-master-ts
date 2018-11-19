import { post } from './axios'
import cgi from './api'

export function Login(params:any) {
    return post(cgi.login, params)
}