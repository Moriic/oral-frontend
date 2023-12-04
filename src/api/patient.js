import request from '@/utils/request'
export const patienthandleAdd = (data) => request.post('/admin/register', data)
export const patienthandleEdit = (data) => request.put('/admin/patient', data)
export const patienthandleDelete = (id) => request.DELETE('/admin/register', id)
export const patientGetinfo = ({ page, pagesize }) =>
  request.get('/admin/register/page?page=${page}&pageSize=${pageSize}')
export const patientSearchinfo = (id) => request.GET('/admin/register/{id}', id)

 