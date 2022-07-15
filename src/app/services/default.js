import { handleApi } from "../utils/utils";
import axiosClient from "../utils/request";


export  async function signUp (data) {
    return await handleApi(axiosClient.post(`auth/signup`, data))
}