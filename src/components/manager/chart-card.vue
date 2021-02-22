<!--  -->
<template>
  <div style="display:flex;padding-top: 20px;">
   

        <a-card :bordered="false" title="近一周访问统计" hoverable style="width: 100%;height:500px;">
          <div id="main1" style="width: 450px;height: 400px;"></div>
        </a-card>

      

        <a-card :bordered="false" title="近一周问答统计" hoverable style="width: 100%;height:100%;margin-left: 20px">
          <div id="main2" style="width: 600px;height: 400px;"></div>
        </a-card>

        <a-card :bordered="false" title="用户数统计" hoverable style="width: 100%;height:100%;margin-left: 20px">
          <div id="main3" style="width: 350px;height: 400px;"></div>
        </a-card>
  
  </div>
</template>

<script>
import { defineComponent,reactive, ref ,onMounted} from 'vue';

import * as echarts from 'echarts';
export default defineComponent({
    name: '',
      setup() {
        onMounted(() => {
          let myChart1 = echarts.init(document.getElementById('main1'), null, {renderer: 'svg'});
         
          let myChart2 = echarts.init(document.getElementById('main2'), null, {renderer: 'svg'});

          let myChart3 = echarts.init(document.getElementById('main3'), null, {renderer: 'svg'});
          let option1 = {
              xAxis: {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                  type: 'value'
              },
              series: [{
                  data: [120, 200, 150, 80, 70, 110, 130],
                  type: 'bar'
              }]
          };
          
          let option2 = {
              title: {
                
              },
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  data: ['数学', '英语', '政治', '专业课']
              },
              grid: {
                  left: '4%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              toolbox: {
                 
              },
              xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
              },
              yAxis: {
                  type: 'value'
              },
              series: [
                  {
                      name: '数学',
                      type: 'line',
                      stack: '总量',
                      data: [120, 132, 101, 134, 90, 230, 210]
                  },
                  {
                      name: '英语',
                      type: 'line',
                      stack: '总量',
                      data: [220, 182, 191, 234, 290, 330, 310]
                  },
                  {
                      name: '政治',
                      type: 'line',
                      stack: '总量',
                      data: [150, 232, 201, 154, 190, 330, 410]
                  },
                  {
                      name: '专业课',
                      type: 'line',
                      stack: '总量',
                      data: [320, 332, 301, 334, 390, 330, 320]
                  }
                  
              ]
          };
          
          let option3 = {
                title: {
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            {value: 1048, name: '学生'},
                            {value: 735, name: '教师'},
                            {value: 580, name: '管理员'}
                           
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };



          myChart1.setOption(option1);
          myChart2.setOption(option2);
          myChart3.setOption(option3);
            console.log('Component is mounted!')
        })

      }
  });
</script>
<style scoped>
</style>