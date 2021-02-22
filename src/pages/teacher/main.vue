<template>
  <div style="height:100%">
    <a-layout class="layout" style="height:100%">
      <a-layout-header style="background:white">
        <topbar/>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <div :style="{ background: '#fff', padding: '24px', height: '100%' ,margin :' 16px 0'}">   
        
          <router-view v-slot="{ Component }" style="margin-left:1%">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Powered by Vue3.0 ©2021 Build by KirazZ1
      </a-layout-footer>
    </a-layout>
    
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

import { UserOutlined } from '@ant-design/icons-vue'

import { useRouter } from 'vue-router'//因为setup访问不到this，所以使用vue-router4新的compsitionAPI

import topbar from '../../components/teacher/topbar.vue'

export default defineComponent({
      name: '',
      components: {
        UserOutlined,
        topbar
      },
      setup() {
        const router = useRouter()
        router.replace("/teacher/home")     //相当于vue2.x beforemount做跳转
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