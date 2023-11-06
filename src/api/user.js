import request from '@/utils/request'
// 登录接口
export const userLoginService = ({ account, password }) =>
  request.post('/user/login', { account, password })
  export const userGetinfo = () => request.get('/user')
  export const userhandleAdd = (data) => request.post('/admin/doctor', data)
  export const userhandleEdit = (data) => request.put('/admin/doctor', data)
  export const userhandleDelete = (id) => request.DELETE('/admin/doctor', id)