import { get, post } from './http'

export const login = p => post('login', p);     //登录

export const logout = () => post('logout');     //登出

export const getTeacherInfo = ()=> post('teacher/getMainInfo');     //教师--获取主页显示的部分个人信息

export const getAllCourse = ()=> post('teacher/getAllCourse');      //教师--获取所有课程信息







