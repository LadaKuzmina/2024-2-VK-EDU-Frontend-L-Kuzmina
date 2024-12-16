import axiosInstance from './apiService.js'

export const fetchCurrentUser = async () => {
  const response = await axiosInstance.get('/user/current/')
  return response.data
}

export const fetchUserById = async (uuid) => {
  const response = await axiosInstance.get(`/user/${uuid}/`)
  return response.data
}

export const getCurrentUser = async (accessToken) => {
  const response = await axiosInstance.get('/user/current/', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  return response.data
}