import request from '@/utils/request'
export const patienthandleAdd = (data) => request.post('/admin/register', data)
export const patienthandleEdit = (data) => request.put('/admin/patient', data)
export const patienthandleDelete = (id) => request.DELETE('/admin/register', id)
export const patientGetinfo = ({ page, pagesize }) =>
  request.GET('/admin/register/page', { page, pagesize })
export const patientSearchinfo = (id) => request.GET('/admin/register/{id}', id)
