<!--  -->
<template>
<div>
 <div class="course-search-bar" >
        <a-tooltip>
          <template #title>
           刷新
          </template>
          <a-button  shape="circle">
            <SyncOutlined />
          </a-button>
        </a-tooltip>


        <a-select
            placeholder="请选择搜索依据"
            class="course-search-bar_select"
           >
          <a-select-option value="Option1-1">
            Option1-1
          </a-select-option>
          <a-select-option value="Option1-2">
            Option1-2
          </a-select-option>
        </a-select>
          <a-input-search
              v-model:value="search"
              placeholder="请输入搜索内容"
              class="course-search-bar_input"
             
              enter-button
          />



  </div>
      <div class="course-table">
      <a-table :columns="columns" :data-source="data">
         
          <template #tags="{ text: tags }">
            <span>
              <a-tag
                v-for="tag in tags"
                :key="tag"
                color="green"
              >
                {{ tag }}
              </a-tag>
            </span>
          </template>


          <template #action="{ record }">
            <span>
              <a-dropdown>
                <a class="ant-dropdown-link" @click.prevent>
                 操作
                  <DownOutlined />
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <a-button type="link">1st menu item</a-button>
                    </a-menu-item>
                    <a-menu-item>
                      <a-button type="link">2nd menu item</a-button>
                    </a-menu-item>
                    <a-menu-item>
                     <a-button type="link">3rd menu item</a-button>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </span>
          </template>
        </a-table>
      </div>
</div>
  
</template>
<script lang="ts">
import { DownOutlined ,SyncOutlined,SmileOutlined, DownOutlined } from '@ant-design/icons-vue';

import { defineComponent,ref } from 'vue';

import json from '../json/data-table.json'



export default defineComponent({
  setup() {
    const columns = json.mycourse

    const search = ref('')

    const data = [
      {
        key: '1',
        courseName: '2020年考研数学全程班',
        courseTime: '2020-01-01 ',
        coursePrice: '25￥',
        courseSellNum:10,
        courseStatus:'已上架',
        courseType: ['数学一'],
      },
      {
        key: '2',
        courseName: '2020年考研寒假专题',
        courseTime: '2020-01-01 ',
        coursePrice: '25￥',
        courseSellNum:10,
        courseStatus:'已上架',
        courseType: ['数学一'],
      },
      {
        key: '3',
        courseName: '数一专题讲座',
        courseTime: '2020-01-01 ',
        coursePrice: '25￥',
        courseSellNum:10,
        courseStatus:'已上架',
        courseType: ['数学一'],
      },
    ]; 

    return {
      data,
      columns,
      search
    };
  },
  components: {
    DownOutlined ,
    SmileOutlined,
    DownOutlined,
    SyncOutlined
  },
});
</script>

<style lang="scss" scoped>
.course-search-bar{
  display:flex;
  .course-search-bar_select{
    width: 150px;
    margin-left: 20px
  }
  .course-search-bar_input{
    width: 200px;
    margin-left: 20px
  }
}
.course-table{
  margin-top:30px
}
</style>