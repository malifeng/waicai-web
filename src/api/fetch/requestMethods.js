import axiosService from './fetchConfig'


const baseUrl = "/v1"
export function get(url,data) {
    return axiosService.get(`${baseUrl}${url}`,{
        params:data,
    })
}

export function post(url,data) {
    return axiosService.post(`${baseUrl}${url}`,data)
}