<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Edit, Picture, Upload } from '@element-plus/icons-vue'

interface BorrowList {
  name: string,
  author: string,
  time: number,
  startDate: string,
  endDate: string,
  state: string

}



const tableData = reactive<BorrowList[]>([
  {
    name: '特洛伊罗斯与克瑞西达',
    author: '[英]威廉·莎士比亚 著 朱生豪 译',
    time: 3,
    startDate: '2019-01-01',
    endDate: '2019-01-04',
    state: '租借中'
  },
  {
    name: '特洛伊罗斯与克瑞西达',
    author: '[英]威廉·莎士比亚 著 朱生豪 译',
    time: 3,
    startDate: '2019-01-01',
    endDate: '2019-01-04',
    state: '租借中'
  },
  {
    name: '特洛伊罗斯与克瑞西达',
    author: '[英]威廉·莎士比亚 著 朱生豪 译',
    time: 3,
    startDate: '2019-01-01',
    endDate: '2019-01-04',
    state: '租借中'
  },
  {
    name: '特洛伊罗斯与克瑞西达',
    author: '[英]威廉·莎士比亚 著 朱生豪 译',
    time: 3,
    startDate: '2019-01-01',
    endDate: '2019-01-04',
    state: '租借中'
  },
  {
    name: '特洛伊罗斯与克瑞西达',
    author: '[英]威廉·莎士比亚 著 朱生豪 译',
    time: 3,
    startDate: '2019-01-01',
    endDate: '2019-01-04',
    state: '租借中'
  },
  {
    name: '特洛伊罗斯与克瑞西达',
    author: '[英]威廉·莎士比亚 著 朱生豪 译',
    time: 3,
    startDate: '2019-01-01',
    endDate: '2019-01-04',
    state: '租借中'
  },
  {
    name: '特洛伊罗斯与克瑞西达',
    author: '[英]威廉·莎士比亚 著 朱生豪 译',
    time: 3,
    startDate: '2019-01-01',
    endDate: '2019-01-04',
    state: '租借中'
  },
  {
    name: '特洛伊罗斯与克瑞西达',
    author: '[英]威廉·莎士比亚 著 朱生豪 译',
    time: 3,
    startDate: '2019-01-01',
    endDate: '2019-01-04',
    state: '租借中'
  },
  {
    name: '特洛伊罗斯与克瑞西达',
    author: '[英]威廉·莎士比亚 著 朱生豪 译',
    time: 3,
    startDate: '2019-01-01',
    endDate: '2019-01-04',
    state: '租借中'
  }



])

const value = ref('')
const options = [
  {
    value: '借阅中',
    label: '借阅中',
  },
  {
    value: '已归还',
    label: '已归还',
  },
  {
    value: '已逾期',
    label: '已逾期',
  }
]
</script>

<template>
  <div class="borrow-warp">
    <div class="borrow-detail-info">
      <div class="borrow-info">
        <el-card class="box-card">
          <el-button class="btn" type="primary">续借</el-button>
          <el-progress type="circle" class="process" :percentage="20" :stroke-width="14" :color="'red'" width="208"
            backgroundColor="#f0f2f5" :indeterminate="true">
            <template #default="{  }">
              <p class="day">3天</p>
              <p class="time">08:24:57</p>
            </template>
          </el-progress>
          <div class="bookMsg2">
            <h5>特洛伊罗斯与克瑞西达</h5>
            <p>书号：12345/123</p>
            <p>作者：[英]威廉·莎士比亚 著 朱生豪 译</p>
            <p>还书日期：2019-01-01</p>
          </div>
        </el-card>
      </div>
      <div class="step">
        <img src="@/assets/home/images/book1.jpg" alt="">
        <el-steps :active="2" class="step-all">
          <el-step title="开始" :icon="Edit" />
          <el-step title="借走" :icon="Upload" />
          <el-step title="借阅" :icon="Upload" />
          <el-step title="归还" :icon="Picture" />
        </el-steps>
      </div>
    </div>
    <div class="borrow-list">
      <div class="title">
        <h3>借阅列表</h3>
        <span>状态：</span>
        <el-select v-model="value" class="m-2" placeholder="Select" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>

      <el-table :data="tableData" style="width: 100%" height="300">
        <el-table-column fixed prop="name" label="书名" :align="'center'" />
        <el-table-column prop="author" label="作者" :align="'center'" />
        <el-table-column prop="time" label="借阅时长" :align="'center'" />
        <el-table-column prop="startDate" label="借阅开始时间" :align="'center'" />
        <el-table-column prop="endDate" label="归还日期" :align="'center'" />
        <el-table-column prop="state" label="状态" :align="'center'" />
      </el-table>
      <el-pagination class="pagination" background layout="prev, pager, next" :total="50" />
    </div>

  </div>
</template>

<style scoped lang="scss">
.borrow-warp {
  padding: 20px;
  box-sizing: border-box;

  .borrow-detail-info {
    width: 100%;
    display: flex;

    .borrow-info {
      width: 30%;

      .box-card {
        width: 400px;
        border-radius: 20px;
        text-align: center;
        position: relative;
        .btn{
          position: absolute;
          top: 10px;
          right: 10px;
        }

        .process {
          margin: 0 auto;
        }

        .bookMsg2 {
          margin-left: 25px;
          margin-top: 15px;

          h5 {
            margin-bottom: 8px;
          }

          p {
            color: rgba(0, 0, 0, 0.5);
            margin-bottom: 8px;
          }
        }

      }
    }

    .step {
      width: 70%;
      text-align: center;

      img {
        width: 200px;
        margin: 0 auto;
      }

      .step-all {
        // height: 80px;
        padding: 20px;
        box-sizing: border-box;
        text-align: left;
      }

    }

  }

  .borrow-list {
    .title{
      h3 {
        padding: 0 0 0px 0;
        text-align: center;
        font-size: 24px;
  
      }
      text-align: right;
    }
    .pagination{
      // height: 30px;
      margin-top: 3px;
      // line-height: 30px;
      // width: 100%;
      // text-align: center;
      // margin: 0 auto;
      justify-content: center;
    }
  }
}
</style>
