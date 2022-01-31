import * as axios from "axios";

const instance = axios.create({
	withCredentials:true,
	baseURL:"https://social-network.samuraijs.com/api/1.0/",
	headers:{
      "API-KEY":"637908f1-956a-4fbc-8411-92cd98a05879"
    }
})
export const authMe = ()=>{
	return instance.get(`auth/me`).then(response => response.data)
}

export const getUsers = (page,count) =>{
	return instance.get(`users?page=${page}&count=${count}`).then(response =>{return response.data});
}
export const profileInfo = (id)=>{
	return instance.get(`profile/${id}`).then(response =>{return response.data});
}
export const followed = (id,isFollowed) =>{
	if (isFollowed === "follow"){
		return instance.post(`follow/${id}`).then(response =>{return response.data});
	}else{
		return instance.delete(`follow/${id}`).then(response =>{return response.data});
	}
}
export const profileStatus = (id)=>{
	return instance.get(`profile/status/${id}`).then(response =>{return response.data})
}
export const newProfileStatus = (newStatus)=>{
	return instance.put(`profile/status`,{status:newStatus}).then(response =>{return response.data})
}
export const authLogin = (email,password)=>{
	return instance.post(`/auth/login`,{
		email:email,
		password:password,
	}).then(response =>{return response.data})
}
