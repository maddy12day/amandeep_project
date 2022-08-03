import { handleApi } from "../utils/utils";
import axiosClient from "../utils/Request";


export  async function signUp (data) {
    return await handleApi(axiosClient.post(`auth/signup`, data))
}

export  async function accountTypes () {
    return await handleApi(axiosClient.get(`users/account_types/`))
}

export  async function early_access (data) {
    return await handleApi(axiosClient.post(`early-access`, data))
}
