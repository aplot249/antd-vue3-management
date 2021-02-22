<template>
  <div>
    <div style="display:flex">
      <infocard imgUrl="/src/assets/Avatar.jpg" lastLogin="2021-01-01" nowLogin="2021-01-01" name="管理员"/>
      <datacard />
    </div>
    <div style="display:flex;height:100%">
     <chartcard/>
    </div>
  </div>
  
</template>

<script>
import infocard from '../../components/manager/info-card.vue'

import datacard from '../../components/manager/data-card.vue'

import chartcard from '../../components/manager/chart-card.vue'

import { defineComponent } from 'vue';

export default defineComponent({
    name: '',
    components:{
      infocard,
      datacard,
      chartcard
    },
    setup() {

    }
  });
</script>
<style  scoped>

</style>