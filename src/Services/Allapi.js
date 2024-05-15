import { CommponApi } from "./CommonApi";
import base_url from "./BaseUrl";


export const register =async(data)=>{

    return await CommponApi("POST",`${base_url}/register`,data,"")
}


export const userlogin = async(data)=>{

    return await CommponApi("POST",`${base_url}/login`,data,"")
}


export const addprojects = async (data,headers)=>{

    return await CommponApi("POST",`${base_url}/addprojects`,data,headers)

}

export const homeprojects = async ()=>{

    return await CommponApi("GET",`${base_url}/homeprojects`,"","")

}

export const allprojects =async(headers)=>{

    return await CommponApi("GET",`${base_url}/allprojects`,"",headers)

}

export const userprojects =async(headers)=>{

    return await CommponApi("GET",`${base_url}/userprojects`,"",headers)

}


export const editprojects = async(id,data,header)=>{

    return await CommponApi("PUT",`${base_url}/editprojects/${id}`,data,header)

}

export const deleteproject =async(id,header)=>{

    return await CommponApi("DELETE",`${base_url}/deleteprojects/${id}`,{},header)

}