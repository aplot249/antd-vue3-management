<!--  -->
<template>
  <div style="display:flex;width:100%">
   <a-card  hoverable class="data-card">
          <template #cover>
            <div class="data-card-cover" :style="{'background-color':coverColor[0]}">
              <ReadOutlined  class="icon"/>
            </div>
          </template>
          <a-statistic title="网站课程总数" :value="112893" style="text-align: left;" />
        </a-card>

        <a-card  hoverable class="data-card" >
          <template #cover>
            <div   class="data-card-cover" :style="{'background-color':coverColor[1]}">
              <UserOutlined  class="icon"/>
            </div>
          </template>
          <a-statistic title="今日活跃用户数量" :value="112893" style="text-align: left;" />
        </a-card>

        <a-card  hoverable class="data-card">
          <template #cover>
            <div  class="data-card-cover" :style="{'background-color':coverColor[2]}">
              <ShoppingOutlined  class="icon"/>
            </div>
          </template>
          <a-statistic title="今日课程交易数量" :value="112893" style="text-align: left;" />
        </a-card>

        <a-card  hoverable class="data-card">
          <template #cover>
            <div  class="data-card-cover" :style="{'background-color':coverColor[3]}">
                <BarChartOutlined class="icon"/>
            </div>
          </template>
          <a-statistic title="今日网站访问量" :value="112893" style="text-align: left;" />
        </a-card>
  </div>
</template>

<script>
import {
    UserOutlined,
    ShoppingOutlined,
    ReadOutlined,
    BarChartOutlined

} from '@ant-design/icons-vue'

import { defineComponent,reactive, ref } from 'vue';

export default defineComponent({
    name: '',
    components:{
      ReadOutlined,
      ShoppingOutlined,
      BarChartOutlined,
      UserOutlined
    },
    setup() {
        const coverColor = ref([
            '#0b82ff','#45bf76','#ff6f27','#e0cc42'
        ])

        return {
            coverColor
        }
    }
  });
</script>
<style lang="scss" scoped>
.data-card{
  width: 100%;
  margin-left: 0px;
  .data-card-cover{
    font-size: 100px;
    background: #45bf76;
    text-align:center;
    .icon{
      filter: invert(100%);
    }
  }
}
</style>