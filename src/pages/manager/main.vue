<template>
 
 <div>
 <a-layout style="min-height: 100vh">
    <!-- 侧边栏 -->
    <a-layout-sider width="300px"  v-model:collapsed="collapsed"  collapsible>
      <SideBar :logoCollapsed="collapsed"/>
      
    </a-layout-sider>

    <a-layout>
      <!-- 标签栏 -->
      <a-layout-header  style="background-color:#fff;border-bottom:1px #f5f5f5 solid">
        <TagBar/>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <div style="background-color:#fff;height:100%;margin-top:10px">
         <router-view v-slot="{ Component }">
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
  </a-layout>
 </div>
</template>
<script>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';

import { defineComponent, ref } from 'vue';

import SideBar from '../../components/manager/SideBar.vue';

import TagBar from '../../components/manager/TagBar.vue'

import { useRouter } from 'vue-router'//因为setup访问不到this，所以使用vue-router4新的compsitionAPI

export default defineComponent({
  components: {
    SideBar,
    TagBar
  },

  setup(){
   
    const collapsed = ref(false)

    const router = useRouter()

    router.replace("/manager/home")     //相当于vue2.x beforemount做跳转

    return {
        collapsed
    }
  },
});
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-layout-header{
  padding:0 10px;
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