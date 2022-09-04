<script setup lang="ts">
import { ref } from 'vue'


const count = ref(0)
</script>

<template>
 <div class="borrow-warp">
   <div class="borrow-info">
      <el-card class="box-card">
        <el-progress type="circle" 
        :percentage="20" 
         :stroke-width="10"
            
                                        :color="'red'"
                                        backgroundColor="#f0f2f5"
                                        :indeterminate="true">
          <template #default="{  }">
           <p class="day">3天</p><p class="time">08:24:57</p>
          </template>
        </el-progress>
        <div class="bookMsg2">
            <h5>特洛伊罗斯与克瑞西达</h5>
            <p>书号：12345/123</p>
            <p>作者：[英]威廉·莎士比亚 著  朱生豪 译</p>
            <p>还书日期：2019-01-01</p>
        </div>
      </el-card>
   </div>
 </div>
</template>

<style scoped lang="scss">
.borrow-warp{
  .borrow-info{
   .box-card{
     width: 400px;
   }
  }
}

</style>
