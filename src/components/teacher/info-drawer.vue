<!--  -->
<template>
  <div>
      <a-drawer
         
          :width="380"
          :placement="placement"
          :closable="false"
          :visible="visible"
          @close="onClose"
        >
        <div class="info-drawer-welcome">
            <a-avatar class="info-drawer-welcome_avatar" :src="imgSrc"  :size="60"></a-avatar>
            <div class="info-drawer-welcome_text">
                <div class="info-drawer-welcome_text_title">欢迎您,{{userName}}</div>
                <div class="info-drawer-welcome_text_content">上次登陆时间:{{lastLogin}}</div>
                <div class="info-drawer-welcome_text_content">本次登陆时间:{{nowLogin}}</div>
            </div>
        </div>
         
            <a-menu
                id=""
                style="width: 340px;margin-top:10px;"
                mode="inline"
                @click="handleClick"
            >
               <a-menu-item key="1">
                    <MailOutlined />
                    <span>Option 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <QqOutlined />
                    <span>Option 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <AppstoreOutlined />
                    <span>Option 3</span>
                </a-menu-item>
                
            </a-menu>
        <div style="height: 100px;width:250px;display:flex;justify-content:space-between;position: fixed;bottom: 0;margin-top:30px;">
            <div style="margin-left:40px;text-align:center;">
                <a-button shape="circle" size="large" >
                    <template #icon><SettingOutlined /></template>
                </a-button>
                <div style="font-size:10px;color:#666;margin-top:10px;">设置</div>
            </div>

            

           
             <div style="margin-left:40px;text-align:center;">
                <a-button shape="circle" size="large" @click="clickLogout">
                    <template #icon><LogoutOutlined /></template>
                </a-button>
                <div style="font-size:10px;color:#666;margin-top:10px;">退出登录</div>
            </div>
        </div>
        

        </a-drawer>
  </div>
</template>

<script>
import { defineComponent, ref ,watch } from 'vue'

import { notification } from 'ant-design-vue';

import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined,SearchOutlined,LogoutOutlined } from '@ant-design/icons-vue'

import { logout } from '../../api/index.js'

import { useRouter } from 'vue-router'//因为setup访问不到this，所以使用vue-router4新的compsitionAPI

export default defineComponent({
    name: '',
    components: {
        MailOutlined,
        QqOutlined,
        AppstoreOutlined,
        SettingOutlined,
        SearchOutlined,
        LogoutOutlined
    },
    props:{
        userName:{
            type:String,
            default:""
        },
        lastLogin:{
            type:String,
            default:""
        },
        nowLogin:{
            type:String,
            default:""
        },
        imgSrc:{
             type:String,
             default:""
        },

        //抽屉所在方位---默认左边
        placement:{
            type:String,
            default:"left"
        },
        //是否显示抽屉---默认不显示
        visible:{
            type:Boolean,
            default:false
        }
    },
    setup(props,context) {


        const router = useRouter()

        //点击外界进行关闭触发的回调方法
        const onClose = () => {
          //在组件内部不能修改props，会报错"target is read only"
          //此处使用自定义事件，对组件外部的值进行修改，从而达到修改props的值且不至于失去其响应式的特性
           context.emit("onClose")
        }

     
        const clickLogout = () =>{
            logout().then(res=>{
                console.log(res);
                router.replace("/")  
                notification["success"]({
                    message: '您已成功退出登录',
                }); 
            })
            console.log("退出登录")
        }

        const handleClick = e => {
            console.log('click', e);
        };



        return {
            onClose,
            handleClick,
            clickLogout
        }
    }
});
</script>
<style lang="scss" scoped>
.info-drawer-welcome{
    display:flex;
    height:100px;
    justify-content:space-between;
    border-bottom:1px #d3d3d3 solid;
    .info-drawer-welcome_avatar{
        margin-left:40px;
        margin-top:10px
    }
    .info-drawer-welcome_text{
        margin-right:60px;
        margin-top:0px;
        .info-drawer-welcome_text_title{
            font-size:18px;
        }
        .info-drawer-welcome_text_content{
            margin-top:5px;
            font-size:10px;
            color:#666;
        }
       
    }
}
</style>