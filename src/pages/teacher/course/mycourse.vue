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
            placeholder="请选择排列依据"
            class="course-search-bar_select"
           >
          <a-select-option value="Option1-1">
            按课程名
          </a-select-option>
          <a-select-option value="Option1-2">
            按销量
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
      <a-table :columns="columns" :data-source="data" rowKey="courseNo">
         
          <template #tags="{ text: tag }">
            <span>
              <a-tag
              
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
                      <a-button type="link">信息修改</a-button>
                    </a-menu-item>
                    <a-menu-item>
                      <a-button type="link">上传视频</a-button>
                    </a-menu-item>
                    <a-menu-item>
                     <a-button type="link">下架课程</a-button>
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

import store from '../../../store/index'

export default defineComponent({
  setup() {
    const columns = json.mycourse

    const search = ref('')

    const data = ref(store.state.courseList.courseList); 

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