<!--  -->
<template>
  <div >
  <a-card hoverable style="width: 400px;">
    
   
    <a-row type="flex" style="margin-left:20px;margin-top:10px">
        <a-col :flex="1">
            <a-avatar :size="64" :src="imgUrl">
               
            </a-avatar>
        </a-col>
        <a-col :flex="4" style="padding-top:10px;border-left:1px #f5f5f5 solid;padding-left:40px">
            <h1 style="font-size:25px">欢迎您,{{name}}</h1>
        </a-col>
    </a-row>
    <a-divider />
    <div class="login-time">
      <h3 >上次登录时间：{{lastLogin}}</h3>
      <h3 >本次登录时间：{{nowLogin}}</h3>
    </div>
  </a-card>
  </div>
</template>

<script>
import { UserOutlined } from '@ant-design/icons-vue';

import { defineComponent,reactive, ref } from 'vue';

export default defineComponent({
    name: '',
    props:{
        name:{
            type:String,
            default:""
        },
        imgUrl:{
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
        }
    },
    components:{
        UserOutlined,
    },
    setup() {
    }
  });
</script>
<style scoped>
.login-time{
    padding-top:30px;
    margin-left:50px;
}
</style>