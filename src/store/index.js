import { createStore } from 'vuex'
// 导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突
import token from '../store/modules/token'

import tabbar from '../store/modules/tabbar'

import topbar from '../store/modules/topbar'

import info from '../store/modules/info'

import courseList from '../store/modules/courseList'

export default createStore({
    modules:{
        token:token,
        tabbar:tabbar,
        topbar:topbar,
        info:info,
        courseList:courseList
    },
})
