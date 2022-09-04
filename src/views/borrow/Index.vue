<script setup lang="ts">
import { ref } from 'vue'


const count = ref(0)
</script>

<template>
 <div class="borrow-warp">
   <div class="borrow-info">
      <el-card class="box-card">
        <el-progress type="circle" 
          class="process"
          :percentage="20" 
          :stroke-width="14"
          :color="'red'"
          width="208"
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
  padding: 20px;
  box-sizing: border-box;
  .borrow-info{
   .box-card{
     width: 400px;
     border-radius: 20px;
     text-align: center;
     .process{
       margin: 0 auto;
     }
      .bookMsg2{
        margin-left: 25px;
        margin-top: 15px;
        h5{
          margin-bottom: 8px;
        }
        p{
           color: rgba(0,0,0,0.5);
           margin-bottom: 8px;
        }
    }

   }
  }
}

</style>
