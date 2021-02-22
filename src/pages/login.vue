<template>
    <div id="login">
       
     
       
        <div class="login-card">
            <a-spin 
                v-model:spinning="spinning"
                size="large"
                tip="登录中..."
                
            >
            <a-card  title="平台后台系统登录" :bordered="true" :headStyle="{ 'font-size': '25px','text-align': 'center' }" style="width: 400px">
                
                <div class="login-card-input">
                    <p>账号：<a-input class="login-card-input_account" v-model:value="account" placeholder="请输入账号" /></p>
                </div>
                <div class="login-card-input">
                    <p>密码：<a-input-password class="login-card-input_passwd" v-model:value="password"  placeholder="请输入密码" /></p>

                </div>
                <div class="login-card-input">
                    <p>角色：
                        <a-select
                            class="login-card-input_role"
                            v-model:value="role"
                            placeholder="请输入账号"
                        >
                            <a-select-option value="教师">教师</a-select-option>
                            <a-select-option value="管理员">管理员</a-select-option>
                        </a-select>
                    </p>
                </div> 
                    <p>
                        <a-button type="primary" size="large" style="width: 350px" @click="clickLogin" >登录</a-button>
                    </p>
            </a-card>
            </a-spin >
   
        </div>
        
    </div>
</template>
<script>
import { login } from '../api/index.js'
import { message } from 'ant-design-vue'

import store from '../store/index'
import {defineComponent, reactive ,ref ,toRefs} from 'vue'
export default defineComponent({
    name:'Login',
    setup(){
        const state = reactive({
            account: '',
            password:'',
            role:'教师'
        })
        const spinning = ref(false)
        //let me = this
        // const account=ref('')
        // const password=ref('')
        function clickLogin(){
            //登录
            if(state.account === ''){
                message.warning('账号不能为空！')
            }else if(state.password === ''){
                message.warning('密码不能为空！')
            }else{
                spinning.value = true   //开启加载
                // console.log(spinning)
                let formdata = {    //数据部分
                    userid:state.account,
                    password:state.password
                }
           
                login(formdata).then(res => {
                    // 获取数据成功后的其他操作
                    if(res.code === 200){   //登陆成功后
                        store.state.token.token = res.data  //设置Vuex的token
                        localStorage.setItem('token', store.state.token.token);//保存到localStorage

                        spinning.value = false
                        console.log(localStorage.getItem('token'))
                    }else{
                        message.error(res.msg);
                        spinning.value = false
                        console.log(res.msg)
                    }
                    console.log(store.state.token.token)
                })  
            } 
        }
        return {
            // account,
            // password,
            spinning,
            ...toRefs(state),
            clickLogin
        }

    }
})


  

</script>
<style lang="scss" scoped>
    @import '../style/login.scss';
</style>