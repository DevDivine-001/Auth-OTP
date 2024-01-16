import axios from "axios";

const url:string = ""

export const  createAcc =async (data:any) => {
    try {
        return await axios.post(`${url}/api/`, data)
    } catch (error) {
        console.log(error);
    }
}

export const  SigninAcc =async (data:any) => {
    try {
        return await axios.post(`${url}/api/`, data)
    } catch (error) {
        console.log(error);
    }
}
export const  AuthenticateAcc =async (data:any) => {
    try {
        return await axios.post(`${url}/api/`, data)
    } catch (error) {
        console.log(error);
    }
}