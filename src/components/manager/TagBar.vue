<template>
   <div id="tab">
        <a-tabs type="editable-card" 
            hide-add 
            :tabBarGutter="7" 
            @tab-click="handleTabClick" 
            v-model:activeKey="activeKey" 
            @edit="onEdit" 
            size="default"
            >
            <a-tab-pane v-for="item in pane" 
            :key="item.key" 
            :tab="item.tab" 
            :closable="item.closable" >
            
            </a-tab-pane>
            <template #renderTabBar="{ DefaultTabBar, ...props }">
                <component
                    :is="DefaultTabBar"
                    v-bind="props"
                    :style="{ background: 'white', border:'1px white solid'}"
                />
            </template>
        </a-tabs>
           
        <a-button type="primary" @click="clean" style="margin-top:5px;margin-right:5px">关闭所有标签页</a-button>
          
     
    </div> 
</template>

<script>
import { defineComponent,reactive, ref ,watch} from 'vue';

import { useRouter } from 'vue-router'

import store from '../../store/index'

export default defineComponent({
    name: '',
    setup() {
        const pane = reactive(store.state.tabbar.tabItem)//初始化标签栏
        
        const router = useRouter()

        const activeKey = ref("1")  //当前选中高亮的标签

        const handleTabClick = (e)=>{
            //回调的e--->当前点击标签的key值
            console.log(e)
        }

        //新增和删除页签的回调
        const onEdit = (targetKey, action)=>{//targetKey为标签key值, action为操作（此处仅用于删除--remove）
            console.log(targetKey, action)
            let route = ""                              //保存查询到的路由
            for(let i = 0 ;i<store.state.tabbar.tabItem.length;i++){    //查询标签栏的tabItem，找出要删除的项
                if(targetKey === store.state.tabbar.tabItem[i].key){
                    route = store.state.tabbar.tabItem[i-1].router
                    store.commit('deleteTab',i)
                    store.commit('setActiveKey',store.state.tabbar.tabItem[i-1].key)
                       router.replace("/manager/"+route)//跳转,使用replace，防止用户返回操作造成标签栏一些bug   
                }
            }
        }

        //关闭所有标签页
        const clean = ()=>{
            for(let i = store.state.tabbar.tabItem.length-1 ;i>0;i--){    
                store.commit('deleteTab',i) 
            }
            store.commit('setActiveKey','1')
            
            router.replace("/manager/home")//跳转,使用replace，防止用户返回操作造成标签栏一些bug   
            //console.log("清空标签栏")
        }

        //监听Vuex store.state.tabbar.activeKey
        watch(()=>store.state.tabbar.activeKey,(newVal)=>{ 
            //console.log("标签栏监听1：",newVal) 
            activeKey.value = newVal
        })

        //监听本地activeKey
        watch(()=>activeKey.value,(newVal)=>{ 
            //console.log("标签栏监听2：",newVal) 
            //点击标签栏，activeKey改变，在这里要添加路由跳转
            let route = ""
            //console.log(newVal)
            //console.log(store.state.tabbar.tabItem[1].key)
            for(let i = 0;i<store.state.tabbar.tabItem.length;i++){
                if(newVal === store.state.tabbar.tabItem[i].key){
                    console.log( store.state.tabbar.tabItem[i].router)
                    route = store.state.tabbar.tabItem[i].router
                    break
                }
            }
            //console.log(route)
            router.replace("/manager/"+route)//跳转,使用replace，防止用户返回操作造成标签栏一些bug   
            store.commit('setActiveKey',newVal)
        })


        return{
            pane,
            activeKey,
            onEdit,
            handleTabClick,
            clean
        }
    }
  });
</script>
<style scoped>
#tab{
    display:flex;
    justify-content:space-between;
    height: 80px;
    margin-top:10px;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{
    border-color: black;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active{

    border-bottom:#ffffff;
}
</style>