import request from '@/utils/request'
// 登录接口

export const getRole = () => request.get('/role')
export const userLoginService = ({ account, password }) =>
  request.post('/login', { account, password })
export const getDoctorPage = (page, pageSize) =>
  request.get('/admin/doctor/page?page=${page}&pageSize=${pageSize}')
export const userhandleAdd = (data) => request.post('/admin/doctor', data)
export const userhandleEdit = (data) => request.put('/admin/doctor', data)
export const userhandleDelete = (id) => request.DELETE('/admin/doctor', id)
export const doctorGetinfo =  (page, pageSize) =>
request.get('/admin/doctor/page?page=${page}&pageSize=${pageSize}')
export const doctorSearchinfo = (id) => request.GET('/admin/doctor/{id}', id)
