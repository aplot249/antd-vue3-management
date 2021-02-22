<!-- 
 -->
<template>
  <div class="table-card">
    <a-card :bordered="false" style="width: 100%;height: 100%">
      <div class="user-search-bar" >
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
            class="user-search-bar_select"
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
              class="user-search-bar_input"
             
              enter-button
          />

      </div>

      <a-table class="data-table" :columns="columns" :data-source="data" :bordered="border">
        <template #name="{ text }">
          <a>{{ text }}</a>
        </template>
        <template #customTitle>
          <span><smile-outlined /> Name</span>
        </template>
        <template #tags="{ text: tags }">
      <span>
        <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
        </template>
        <template #action="{ text, record }">
      <span>
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <down-outlined /> </a>
      </span>
        </template>
      </a-table>
    </a-card>
  </div>

</template>

<script>
import {
    SmileOutlined,
    DownOutlined,
    SyncOutlined
} from '@ant-design/icons-vue';

import { defineComponent, ref,reactive } from 'vue';

import json from './json/data-table.json';

export default defineComponent({
    name:'ViewUser',
    components: {
        SmileOutlined,
        DownOutlined,
        SyncOutlined
    },
    setup() {
        const columns = reactive(json.checkuser)
      
        const data = reactive([
            {
                key: '1',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },
            {
                key: '2',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },
            {
                key: '3',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },
            {
                key: '4',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },
            {
                key: '5',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },
            {
                key: '6',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },
            {
                key: '7',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },
            {
                key: '8',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },
            {
                key: '9',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },
            {
                key: '10',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },
            {
                key: '11',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },
            {
                key: '12',
                id:'1s5s687s',
                name: '陈冠希',
                sex:'男',
                age: 32,
                microphone:'15815013212',
                role:'Ganster',
                resentTime: '2020-01-01',
                status: '禁言',
            },

        ])

        return {
            data,
            columns,
            border:true,
            search:''
        };
    },
});

</script>
<style lang="scss" scoped>
.user-search-bar{
  display:flex;
  .user-search-bar_select{
    width: 150px;
    margin-left: 20px
  }
  .user-search-bar_input{
    width: 200px;
    margin-left: 20px
  }
}
.data-table{
  margin-top:30px
}
</style>