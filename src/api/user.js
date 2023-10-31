import request from '@/utils/request'
// 登录接口
export const userLoginService = ({ account, password }) =>
  request.post('/user/login', { account, password })
