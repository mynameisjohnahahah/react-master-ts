import { post } from './axios'
import cgi from './api'
import qs from 'qs';
import md5 from 'md5';

export function Login(params: any) {
    params.passwd = md5(params.passwd)
    const data =  qs.stringify(params)
    return post(cgi.login, data)
}

export function GetInventory(params: object) {
    const data =  qs.stringify(params)
    return post(cgi.getInventory, data)
}