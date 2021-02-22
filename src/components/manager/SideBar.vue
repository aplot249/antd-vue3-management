<template>
  <div>
      <div  class="logo" style="height:65px;display: flex;">
        <DashboardOutlined style="color: aliceblue;font-size: 30px;margin-top: 20px;margin-left: 25px;"/>
        <transition name="logo-collapsed">
          
          <h1 v-if="logoCollapsed === false" style="color: aliceblue;text-align: center;margin-left:20px;padding-top: 20px;font-size: 20px;">平台后台管理系统</h1>
        </transition>
       
      </div>
      <a-menu theme="dark" 
      v-model:selectedKeys="selectedKeys" 
      mode="inline"
      @click="clickMenuItem"
      >
        <a-menu-item key="1">

            <span><HomeOutlined /><span>系统主页</span></span>
    
          </a-menu-item>
    
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <UserOutlined /><span>用户管理</span></span>
            </template>
            <a-menu-item key="3"><SearchOutlined />查看用户信息</a-menu-item>
            <a-menu-item key="4"><EditOutlined />编辑用户信息</a-menu-item>
            <a-menu-item key="5"><HistoryOutlined />操作历史记录</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span><ProfileOutlined /><span>课程管理</span></span>
            </template>
            <a-menu-item key="7"><ReadOutlined />查看所有课程</a-menu-item>
            <a-menu-item key="8"><EyeOutlined />审核课程信息</a-menu-item>
            <a-menu-item key="9"><HistoryOutlined />审核历史记录</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span><ZhihuOutlined /><span>问答管理</span></span>
            </template>
            <a-menu-item key="11"><EyeOutlined />审核提问信息</a-menu-item>
            <a-menu-item key="12"><EyeOutlined />审核举报信息</a-menu-item>
            <a-menu-item key="13"><HistoryOutlined />审核历史记录</a-menu-item>
    
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <template #title>
              <span><AlipayCircleOutlined /><span>交易管理</span></span>
            </template>
            <a-menu-item key="15"><PayCircleOutlined />订单信息查看</a-menu-item>
    
    
          </a-sub-menu>
      </a-menu>
   
  </div>
</template>

<script>
import {
    SearchOutlined,
    EditOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    ProfileOutlined,
    HomeOutlined,
    DashboardOutlined,
    HistoryOutlined,
    EyeOutlined,
    ZhihuOutlined,
    AlipayCircleOutlined,
    ReadOutlined,
    PayCircleOutlined,

    
} from '@ant-design/icons-vue';

import { useRouter } from 'vue-router'//因为setup访问不到this，所以使用vue-router4新的compsitionAPI

import { defineComponent, ref ,watch} from 'vue';

import json from './json/sidebar.json';//侧边栏对应按钮的key以及route信息封装在一个对象数组中

import store from '../../store/index'

export default defineComponent({
    name: '',
    props:{
      logoCollapsed:{
        type:Boolean,
        default:false
      }
    },

    components: {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        PieChartOutlined,
        MailOutlined,
        DesktopOutlined,
        InboxOutlined,
        AppstoreOutlined,
        UserOutlined,
        SearchOutlined,
        EditOutlined,
        ProfileOutlined,
        HomeOutlined,
        DashboardOutlined,
        HistoryOutlined,
        EyeOutlined,
        ZhihuOutlined,
        AlipayCircleOutlined,
        ReadOutlined,
        PayCircleOutlined

    },
    setup() {
        const router = useRouter()

        const collapsed = ref(false)

        const selectedKeys = ref(['1'])

        const searchTab = (tab)=>{//在现有标签中进行搜索看看有没有重复的
            for(let i = 0;i<store.state.tabbar.tabItem.length;i++){
                if(tab === store.state.tabbar.tabItem[i].tab){  //如果找得到返回对应的key值
                  return store.state.tabbar.tabItem[i].key  
                }
            }
            return null     //找不到返回null
        }

        const clickMenuItem = (e) =>{
            let route = ""
            let tab = ""
            //根据按钮的key查询对应的路由
            for(let i = 0;i < json.sidebarList.length; i++){
                if(e.key === json.sidebarList[i].key){
                    console.log(json.sidebarList[i].router)
                    route = json.sidebarList[i].router
                    tab = json.sidebarList[i].title
                    break
                }
            }
            let search_result = searchTab(tab)
            if(search_result !== null){
                  store.commit('setActiveKey',search_result) 
            }else{
                   //调用vuex中mutation-- addTab(state,tab)
                  //tab是对象，对象内有tab和router
                  let tab_obj = {
                      tab:tab,
                      router:route
                  }
                  console.log(tab_obj)
                  store.commit('addTab',tab_obj)
                  console.log(store.state.tabbar.tabItem)
            }
                  //新增标签----加判断
                  //在执行添加标签之前，要找下是否已有重复的标签（重复标题）            
                router.replace("/manager/"+route)//跳转,使用replace，防止用户返回操作造成标签栏一些bug   
        }

        watch(()=>store.state.tabbar.activeKey,(newVal)=>{ 
            //console.log("侧边栏监听：",newVal) 
            let title = ""
            for(let i=0;i<=store.state.tabbar.tabItem.length;i++){
              if(newVal === store.state.tabbar.tabItem[i].key){
                  title = store.state.tabbar.tabItem[i].tab
                  break
              }
            }
            //console.log("侧边栏监听：",title) 
            for(let i = 0;i < json.sidebarList.length; i++){
                if(title === json.sidebarList[i].title){
                   let array = [] 
                   array.push(json.sidebarList[i].key)
                   selectedKeys.value = array
                   break
                }
            }
          
        })

        return {
            collapsed,
            selectedKeys,
            clickMenuItem,
            searchTab
        };

    }
  });
</script>
<style scoped>
  
  .logo-collapsed-enter-active, .logo-collapsed-leave-active {
    transition: opacity .2s ease;
  }

  .logo-collapsed-enter-from, .logo-collapsed-leave-to {
    opacity: 0;
  } 
</style>