<!--  -->
<template>
  <div>
      <a-layout style="padding: 12px 0; background: #fff">
        <a-layout-sider width="300" style="background: #fff">
          <a-menu
            mode="inline"
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            @click="clickMenuItem"
            style="height: 100%"
          >
            <a-menu-item key="1">  <ReadOutlined />我的课程</a-menu-item>
           
            <a-sub-menu key="sub1">
              <template #title>
                <span>
                  <AppstoreOutlined />
                  课程管理
                </span>
              </template>
              <a-menu-item key="2">  <CloudUploadOutlined />上传新的课程</a-menu-item>
              <a-menu-item key="3"> <HistoryOutlined />课程上传历史</a-menu-item>
             
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <template #title>
                <span>
                  <AccountBookOutlined />
                  订单管理
                </span>
              </template>
              <a-menu-item key="4">  <ProfileOutlined /> 查看所有订单</a-menu-item>
              <a-menu-item key="5"><CommentOutlined />查看课程评价</a-menu-item>
             
            </a-sub-menu>
            
           
            
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
           <router-view v-slot="{ Component }" style="margin-left:1%">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </a-layout-content>
      </a-layout>
  </div>
</template>

<script>
import {
  ReadOutlined,
  AppstoreOutlined, 
  LaptopOutlined, 
  NotificationOutlined,
  CloudUploadOutlined,
  HistoryOutlined,
  AccountBookOutlined,
  CommentOutlined,
  ProfileOutlined
   } from '@ant-design/icons-vue'

import { defineComponent, ref,onMounted } from 'vue'

import { useRouter } from 'vue-router'//因为setup访问不到this，所以使用vue-router4新的compsitionAPI



export default defineComponent({
  components: {
    AppstoreOutlined,
    ReadOutlined,
    LaptopOutlined,
    NotificationOutlined,
    CloudUploadOutlined,
    HistoryOutlined,
    AccountBookOutlined,
    CommentOutlined,
    ProfileOutlined
  },

  setup() {
    const router = useRouter()

   
    router.replace('/teacher/course/mycourse')


    const routes = ['/teacher/course/mycourse',
      '/teacher/course/uploadcourse',
      '/teacher/course/coursesuploadhistory',
      '/teacher/course/checkorders',
      '/teacher/course/orderevaluations'
    ]

    const clickMenuItem = (e) =>{
         //router.replace()
        router.replace(routes[Number(e.key)-1])  
        console.log(routes[Number(e.key)-1])
    }

    return {
      openKeys: ref(['sub1','sub2']),
      selectedKeys:ref(['1']),
      clickMenuItem
    };
  },
});
</script>
<style scoped>
  .fade-enter-active,
   .fade-leave-active {
      transition: opacity 0.5s ease;
   }

   .fade-enter-from,
   .fade-leave-to {
      opacity: 0;
   }
</style>