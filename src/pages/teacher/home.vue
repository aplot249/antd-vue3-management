<!--  -->
<template>
  <div class="home">
      <div >
          
          
          <a-card  hoverable style="width: 400px;"> 
              <template #cover>
              <infocard :imgUrl="imgUrl" :lastLogin="lastLogin" :nowLogin="nowLogin" :name="userName"/>
            </template>
            <a-statistic title="已发布的课程数" :value="10" style="margin-top: 20px;margin-right: 50px" />
            <a-statistic title="待审核的课程数" :value="112893" style="margin-top: 10px;margin-right: 50px" />
            <a-statistic title="已售出的课程数" :value="112893" style="margin-top: 10px;margin-right: 50px" />
          </a-card>
          
      </div>

      <div >
    <a-card title="我的课程" hoverable style="width: 350px;margin-left: 40px">
     <template #extra>
            <a-button type="link" @click="moreCourse" block>更多</a-button>
          </template>
      <a-spin tip="Loading..." :spinning="courseListSpinning">
         
          <a-list item-layout="vertical" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  :description="item.description"
                >
                  <template #title>
                    <!-- <a href="https://www.antdv.com/">{{ item.title }}</a> -->
                    {{ item.title }}
                  </template>
                  
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-spin>
    </a-card>
   </div>

      <div >
        <a-card title="历史操作"  hoverable style="width: 450px;margin-left: 40px">

              <a-timeline>
                  <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                  <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                  <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
                  <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
              </a-timeline>

          
        </a-card>
        <a-card title="数据统计"  hoverable style="width: 450px;height:300px;margin-top:40px;margin-left: 40px">
           
            <div id="main1" style="width:380px;height:210px;margin-left:10px"></div>
        </a-card>
        
      </div>
   <div >

   
  
    
</div>
    <div >
        
        <a-card  hoverable style="width: 400px;margin-left:40px;">
         <template #cover>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                height="250"
              />
            </template>
            <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" /> 
        </a-card>
        
        
    </div>
 
        
   
   
    
     
     
  


  
  </div>
</template>

<script>

import infocard from '../../components/manager/info-card.vue'

import { defineComponent,reactive, ref ,onMounted} from 'vue';

import { useRouter } from 'vue-router'//因为setup访问不到this，所以使用vue-router4新的compsitionAPI

import * as echarts from 'echarts';

import store from '../../store/index'

import { getAllCourse } from '../../api/index.js'

export default defineComponent({
    name: '',
    components:{
      infocard,
    },
    setup() {
      onMounted(()=>{
        const option1 =  {
            tooltip: {
                trigger: 'item'
            },
            legend: {
 
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 1048, name: '搜索引擎'},
                        {value: 735, name: '直接访问'},
                        {value: 580, name: '邮件营销'},
                        {value: 484, name: '联盟广告'},
                        {value: 300, name: '视频广告'}
                    ]
                }
            ]
        };
        let myChart1 = echarts.init(document.getElementById('main1'), null, {renderer: 'svg'});
        myChart1.setOption(option1);
      })


      console.log(store.state.info)

      const userName = ref(store.state.info.userName)

      const lastLogin = ref(store.state.info.lastLogin)

      const nowLogin = ref(store.state.info.nowLogin)

      const imgUrl =ref(store.state.info.imgUrl)

 
      const data = ref([]);

      const courseListSpinning = ref(true)

      const value = ref();

      const router = useRouter()

      getAllCourse().then(res=>{
        console.log(res)
        store.commit("setCourseList",res.data)
        for(let i = 0;i<store.state.courseList.courseList.length;i++){
          if(i === 4){
            break
          }else{
            let obj = {
              title:store.state.courseList.courseList[i].courseName,
              description:"发布时间："+store.state.courseList.courseList[i].courseTime
            }
            data.value.push(obj)
          }
        }
        courseListSpinning.value = false
      })

      const moreCourse = ()=>{
        store.commit('setSelectedkeys',"2")
          router.replace("/teacher/course")     //相当于vue2.x beforemount做跳转
      }

      


      
      const onPanelChange = (value, mode) => {
        console.log(value, mode);
      };
      return {
        value,
        onPanelChange,
        data, 
        moreCourse,
        lastLogin,
        nowLogin,
        userName,
        imgUrl,
        courseListSpinning
      };
    }
  });
</script>
<style lang="scss" scoped>
.home{
  display:flex;
  margin-top:40px;
}

</style>