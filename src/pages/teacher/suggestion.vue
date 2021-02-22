<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="问题标题">
      <a-input v-model:value="formState.name" placeholder="请输入问题标题" />
    </a-form-item>
    <a-form-item label="问题类型">
      <a-select v-model:value="formState.region" placeholder="请选择问题类型">
        <a-select-option value="shanghai">Zone one</a-select-option>
        <a-select-option value="beijing">Zone two</a-select-option>
      </a-select>
    </a-form-item>
    
 
    
    <a-form-item label="问题描述">
      <a-textarea v-model:value="value2"  rows="20" placeholder="请详细描述您遇到的问题" allow-clear />
    </a-form-item>
       <a-form-item label="联系方式">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">提交</a-button>
      
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive, toRaw } from 'vue';
export default defineComponent({
  setup() {
    const formState = reactive({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });

    const onSubmit = () => {
      console.log('submit!', toRaw(formState));
    };

    return {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      formState,
      onSubmit,
    };
  },
});
</script>