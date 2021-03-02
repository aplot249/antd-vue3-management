<!--  -->
<template>
  <div>
    <a-page-header
        title="课程信息修改"
        sub-title="修改您的课程信息"
        style="height:40px"
        @back="back"
    />
<a-divider />
    <a-form  :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="课程标题" >
      <a-input v-model:value="formState.courseName" placeholder="请输入新的课程标题"/>
    </a-form-item>
    <a-form-item label="课程类型">
      <a-select v-model:value="formState.courseType" placeholder="请输入新的课程类型">
        <a-select-option value="数学一">数学一</a-select-option>
        <a-select-option value="数学二">数学二</a-select-option>
        <a-select-option value="数学三">数学三</a-select-option>
        <a-select-option value="数学通用">数学通用</a-select-option>
        <a-select-option value="英语一">英语一</a-select-option>
        <a-select-option value="英语二">英语二</a-select-option>
         <a-select-option value="英语通用">英语通用</a-select-option>
        <a-select-option value="政治">政治</a-select-option>
        <a-select-option value="专业课">专业课</a-select-option>

      </a-select>
    </a-form-item>
   
 
    <a-form-item label="课程状态">
      <a-radio-group v-if="formState.courseStatus !== '审核中' " v-model:value="formState.courseStatus">
        <a-radio value="上架">上架</a-radio>
        <a-radio value="下架">下架</a-radio>
      </a-radio-group>
      <a-radio-group v-else v-model:value="formState.courseStatus">
        <a-radio value="审核中">审核中</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="课程价格">
        <a-input-number
            v-model:value="formState.coursePrice"
            :formatter="value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="value => value.replace(/\￥\s?|(,*)/g, '')"
        />
    </a-form-item>
    <a-form-item label="课程详情">
      <a-textarea v-model:value="formState.courseDescription" placeholder="请输入新的课程详情" :rows="4" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">保存</a-button>

    </a-form-item>
  </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive, toRaw ,onMounted,toRefs} from 'vue';

import { useRouter } from 'vue-router'//因为setup访问不到this，所以使用vue-router4新的compsitionAPI

import store from '../../../../store/index'

export default defineComponent({
  props:['courseNo'],
  setup(props) {
    onMounted(()=>{
       // console.log(props.courseNo)
       for(let i = 0;i<store.state.courseList.courseList.length;i++){
        console.log(store.state.courseList.courseList[i].courseNo)
           if(Number(props.courseNo) === store.state.courseList.courseList[i].courseNo){
                formState.courseName = store.state.courseList.courseList[i].courseName
                formState.courseType = store.state.courseList.courseList[i].courseType
                formState.coursePrice = store.state.courseList.courseList[i].coursePrice
                formState.courseSellNum = store.state.courseList.courseList[i].courseSellNum
                formState.courseStatus = store.state.courseList.courseList[i].courseStatus

                break
           }
       }
    })

    const formState = reactive({
        courseName: '',
        courseType: '',
        coursePrice: '',
        courseSellNum: '',
        courseStatus: '',
    })

    const router = useRouter()

    console.log(props.courseNo)
    

    const back = () =>{
        router.replace("/teacher/course/mycourse")
    } 

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
      back
    };
  },
});
</script>
<style scoped>
</style>