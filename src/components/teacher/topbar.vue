<!--  -->
<template>
  <div style="height:100%">
    <a-row style="height:100%">
          <a-col :span="3" style="height:100%">
            <div class="logo">
              <img src="../../assets/logo2020.png" class="logo-img">
            </div>
          </a-col>
          <a-col :span="14" style="height:100%;">
            <a-menu
              @click="clickMenu"
              mode="horizontal"
              v-model:selectedKeys="selectedKeys"
              :style="{ lineHeight: '64px' , margin:'0 80px'}"
            >
              <a-menu-item key="1">首页</a-menu-item>
              <a-menu-item key="2">课程管理</a-menu-item>
              <a-menu-item key="3">问答中心</a-menu-item>

              <a-menu-item key="4">意见反馈</a-menu-item>
            </a-menu>
          </a-col>
           <a-col :span="6" style="height:100%">
             <a-input-search
                v-model:value="searchText"
                placeholder="input search text"
                style="width: 60%;margin-left:30%"
               
              />
          </a-col>
          <a-col :span="1" style="height:100%">
              <a-avatar src="src/assets/Avatar.jpg"  @click="showDrawer" :size="44">
                
              </a-avatar>
              
            
          </a-col>
        </a-row>
        <!-- 信息抽屉组件 -->
        <infodrawer 
          @onClose="onClose"
          :placement="placement"
          :visible="visible"
        />
  </div>
</template>

<script>
import { defineComponent, ref,reactive ,watch} from 'vue';

import { useRouter } from 'vue-router'//因为setup访问不到this，所以使用vue-router4新的compsitionAPI

import infodrawer from './info-drawer.vue'

import store from '../../store/index'

export default defineComponent({
      name: '',
      components:{
        infodrawer
      },
      setup() {

        const router = useRouter()
       
        const placement = ref('left')

        const visible = ref(false)

        const selectedKeys = ref([store.state.topbar.selectkeys])//初始化标签栏
       
        const searchText = ref('')

        const showDrawer = () => {
          //点击头像触发,使抽屉打开
          visible.value = true
        }

        const clickMenu = (e) =>{
          console.log(e.key)
          //顶栏路由数组
          const routes = ['/teacher/home','/teacher/course','/teacher/discussion','/teacher/suggestion']
          //e.key为字符串形式的index,做一下强转

          router.replace(routes[Number(e.key)-1])     //相当于vue2.x beforemount做跳转
        }

        

        const onClose = () => {
          //抽屉组件通过自定义事件调用关闭的方法
          visible.value = false
        };


        watch(()=>store.state.topbar.selectedkeys,(newVal)=>{ 
            console.log("menu监听1：",newVal) 
            selectedKeys.value = [newVal]
        })

        watch(()=>selectedKeys.value,(newVal)=>{ 
            console.log("menu监听2：",newVal[0]) 
            //selectedKeys.value = newVal
            console.log(store.state.topbar)
            store.commit('setSelectedkeys',newVal[0])
        })

        return {
            selectedKeys,
            showDrawer,
            clickMenu,
            onClose,
            placement,
            visible,
            searchText
        }
      }
  });
</script>
<style lang="scss" scoped>
    .logo{
      height:100%;
      .logo-img{
        height:100%;
      }
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
</style>