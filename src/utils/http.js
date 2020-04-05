import axios from "axios";


const BASE_URL = "/";


export async function get(url) {
    return await axios.get(BASE_URL + url)
}

export async function post(url, payload) {
    return await axios.post(BASE_URL + url, payload)
}

export async function socket(event, payload) {

}