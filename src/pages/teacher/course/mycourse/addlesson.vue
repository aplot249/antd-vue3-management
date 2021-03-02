<!--  -->
<template>
  <div>
    <a-page-header
        title="上传课程视频"
        sub-title="上传您的课程视频"
        style="height:40px"
        @back="back"
    />
    <a-divider />
    <div style="display:flex">
      <a-card title="视频列表" hoverable   style="margin-left:40px;width: 300px;height:550px">
      <template #extra> <a-button type="link"><PlusOutlined />添加视频</a-button></template>
      <div style=" overflow:auto; height:400px ">
       <a-directory-tree
          multiple
          :defaultExpandAll="true"
          v-model:selectedKeys="selectedKeys"
          @select="select"
        >
          <a-tree-node v-for="unit in videoList" :key="unit.key" :title="unit.title">
            <a-tree-node v-for="item in unit.container" :key="item.key" :title="item.title" is-leaf >
              <template #icon><VideoCameraOutlined /></template>
            </a-tree-node>
          </a-tree-node>
       
        </a-directory-tree>
      </div>
       
      </a-card>
      <div>
        <a-card  title="视频预览" hoverable   style="margin-left:60px;width: 800px;height:550px">
            <a-empty 
              v-if="videoUrl === ''"
              style="margin-top:100px"
              image="src/assets/video.png"
            >
              <template #description>
                <span>
                  点击左侧的视频会在此处预览
              
                </span>
              </template>
            
            </a-empty>
            <div id="dplayer" v-show="videoUrl !== ''"></div>
        </a-card>
      </div>
    </div>
    
  </div>
</template>

<script>
import { defineComponent, ref ,onMounted,watch} from 'vue';

import { VideoCameraOutlined,PlusOutlined  } from '@ant-design/icons-vue';

import DPlayer from 'dplayer';

import { useRouter } from 'vue-router'//因为setup访问不到this，所以使用vue-router4新的compsitionAPI

export default defineComponent({
  props:['courseNo'],

  components:{
    VideoCameraOutlined,
    PlusOutlined
  },
  setup(props) {

    const selectedKeys = ref([])

    const videoUrl = ref("")

    const videoList = [
          {
              key:'1',
              title:'第一章',
              container:[
                {
                  key:'1-1',
                  title:'函数与导数基本概念'
                },
                {
                  key:'1-2',
                  title:'函数与导数习题课'
                },
                {
                  key:'1-3',
                  title:'函数与导数真题精练'
                }
              ]
          },
          {
              key:'2',
              title:'第二章',
              container:[
                {
                  key:'2-1',
                  title:'函数与导数基本概念'
                },
                {
                  key:'2-2',
                  title:'函数与导数习题课'
                },
                {
                  key:'2-3',
                  title:'函数与导数真题精练'
                }
              ]
          }
          
        ]

    const router = useRouter()


    let dp =undefined

    onMounted(()=>{
      dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
            url: '',
        },
      });
    })
    
    const back = ()=>{
        router.replace("/teacher/course/mycourse")
    }

    const select = (e)=>{ //e-item对应的key值
      
      let rule = /-/
      console.log(rule.test(e))
      dp.pause()
      if(rule.test(e) === false){
        videoUrl.value = ""
      }else{
        //点击发请求，把key发出去，由中间层解析二次请求
        videoUrl.value = "src/assets/2.mp4"   //赋值
        dp.switchVideo({
          url:  videoUrl.value

        })
      }
    }

    watch(()=>videoUrl.value,(newVal)=>{ 
      if(videoUrl.value === ""){
       
        console.log("提示语")
      }else{
       
        console.log("视频")
      }
    })

    

    
    return {
      //expandedKeys,
      selectedKeys,
      videoList,
      videoUrl,
      select,
      back
    };
  },
});
</script>
<style scoped>

</style>