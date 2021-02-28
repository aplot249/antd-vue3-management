<template>
  <div style="height:100%">
    <a-layout class="layout" style="height:100%">
      <a-layout-header style="background:white">
        <topbar :imgSrc="imgSrc" :info="info"/>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <div :style="{ background: '#fff', padding: '24px', height: '100%' ,margin :' 16px 0'}">   
        <a-spin tip="Loading..." :spinning="spinning" size="large" style="margin-top:150px">
          <router-view v-slot="{ Component }" style="margin-left:1%">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
          </a-spin>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Powered by Vue3.0 ©2021 Build by KirazZ1
      </a-layout-footer>
    </a-layout>
    
  </div>
</template>

<script>
import { defineComponent, ref ,reactive,h} from 'vue'

import { UserOutlined,SmileOutlined } from '@ant-design/icons-vue'

import { useRouter } from 'vue-router'//因为setup访问不到this，所以使用vue-router4新的compsitionAPI

import topbar from '../../components/teacher/topbar.vue'

import { getTeacherInfo } from '../../api/index.js'

import store from '../../store/index'

import { notification } from 'ant-design-vue';

export default defineComponent({
      name: '',
      components: {
        UserOutlined,
        topbar
      },
      setup() {
        const imgSrc = ref("")

        const info = reactive({
           userName:"陈冠希",
           lastLogin:"2020-01-01",
           nowLogin:"2020-01-01"
        })

        const spinning =ref(true)

        const router = useRouter()
          //发请求获取信息
        getTeacherInfo().then(res =>{
          console.log(res)
          if(res.code === 200){
            imgSrc.value = res.data.imgSrc
            info.userName = res.data.info.userName
            info.lastLogin = res.data.info.lastLogin
            info.nowLogin = res.data.info.nowLogin

            store.commit("setUserName",res.data.info.userName)
            store.commit("setLastLogin",res.data.info.lastLogin)
            store.commit("setNowLogin",res.data.info.nowLogin)
            store.commit("setImgUrl",res.data.imgSrc)
            //console.log(store.state.info)

            
            //懒加载，确保请求完数据进vuex后再进行路由跳转
            setTimeout(() => {
               router.replace("/teacher/home")     //相当于vue2.x beforemount做跳转
               spinning.value = false
               notification.open({
                  message: '欢迎您，'+res.data.info.userName,
                  description: '欢迎来到“研学帮”平台教师端！',
                  //icon传入参数类型为vNode,AntDesign官方文档中传入icon方式有误
                  //需要调用vue中的h方法创建虚拟DOM之后传入
                  icon:h(
                      SmileOutlined,
                    {
                      style:"color:rgb(69, 191, 118);"
                    },
                  )
                }); 
            }, 2000);
          }else{
            //token过期
            alert("您还没有登录！")
            router.replace("/") 
          }
          
        })

       

       

        return {
            imgSrc,
            info,
            spinning
        }
      }
  });
</script>
<style scoped>
    .logo{
      height:100%
    }
    .logo-img{
      height:100%
    }
    .site-layout-content {
      min-height: 280px;
      padding: 24px;
      background: #fff;
    }
    #components-layout-demo-top .logo {
      float: left;
      width: 120px;
      height: 31px;
      margin: 16px 24px 16px 0;
      background: rgba(255, 255, 255, 0.3);
    }
    .ant-row-rtl #components-layout-demo-top .logo {
      float: right;
      margin: 16px 0 16px 24px;
    }
   .fade-enter-active,
   .fade-leave-active {
      transition: opacity 0.5s ease;
   }

   .fade-enter-from,
   .fade-leave-to {
      opacity: 0;
   }
</style>