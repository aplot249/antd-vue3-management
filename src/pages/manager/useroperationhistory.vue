<!--  -->
<template>
  <div id="operate-user-history-card">
    <a-card :bordered="false" style="width: 100%;height: 100%">
      <a-list item-layout="vertical" size="small" :pagination="pagination"  :data-source="listData">
        <template #renderItem="{ item, index }">
            <a-list-item key="item.title">
              <a-list-item-meta>
                <template #avatar>
                  <ClockCircleOutlined style="font-size: 25px;"/>
                </template>
                <template #title>
                  时间：2020-01-01
                </template>
                <template #description>
                  {{ item.userId }}<br>
                  {{ item.userName }}&nbsp;&nbsp;&nbsp; {{ item.content }}
                </template>
              </a-list-item-meta>
            </a-list-item>
        </template>
      </a-list>
    </a-card>
  </div>
</template>


<script>
import { StarOutlined, LikeOutlined, MessageOutlined ,ClockCircleOutlined} from '@ant-design/icons-vue';

import { defineComponent, ref,reactive } from 'vue';


export default defineComponent({
    name:'',
    components: {
        StarOutlined,
        LikeOutlined,
        MessageOutlined,
        ClockCircleOutlined
    },
    setup(){
      const listData = reactive([
          {
              userId:'账号：115315',
              userName:'用户名：陈冠希',
              content: '操作:微信转账300',
          },
          {
              userId:'账号：115315',
              userName:'用户名：陈冠希',
              content: '操作:微信转账300',
          },
          {
              userId:'账号：115315',
              userName:'用户名：陈冠希',
              content: '操作:微信转账300',
          },
          {
              userId:'账号：115315',
              userName:'用户名：陈冠希',
              content: '操作:微信转账300',
          },
          {
              userId:'账号：115315',
              userName:'用户名：陈冠希',
              content: '操作:微信转账300',
          }
      ])

      const pagination = reactive({
            onChange: page => {
              console.log(page);
            },
            pageSize: 7,
          })
      return {
        listData,
        pagination
      }
    }
});
</script>
<style scoped>
</style>