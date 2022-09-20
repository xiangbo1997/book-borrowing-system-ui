<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Avatar,
  ChatDotRound,
  Search,
  Delete,
  Edit,
  Plus
} from '@element-plus/icons-vue'
import type { FormRules } from 'element-plus'
import { isvalidatePassword } from '@/utils/tool'

interface TableData {
  username: string,
  jurisdiction: string,
  email: string,
  phone: string,
}

const tableData = reactive<TableData[]>([
  {

    username: 'Tom',
    jurisdiction: 'admin',
    email: '2561476@qq.com',
    phone: '17603567892',

  },

])
const input = ref<string>('')
const dialogVisible = ref<boolean>(false)
const dialogTitle = ref<string>('新增用户')
const formSize = ref<string>('default')

const addManage = () => {
  dialogTitle.value = '新增用户'
  dialogVisible.value = true
}
const editManage = (index: number, row: Object): void => {
  dialogTitle.value = '编辑用户'
  dialogVisible.value = true
}
const ruleForm = reactive({
    username: 'Tom',
    password: 'qw235hjke',
    jurisdiction: 'admin',
    email: '2561476@qq.com',
    phone: '17603567892',
})

const validatePassword = (rule: any, value: any, callback: any) => {
    if (!isvalidatePassword(value)) {
      callback(new Error(isvalidatePassword(value)));
    } else {
      callback();
    }
  }
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 12, message: '用户名长度应为5-12', trigger: 'blur' },
  ],
  password: [
    { required: true, trigger: 'blur', validator: validatePassword },

  ],
  jurisdiction: [
    { required: true, trigger: 'blur' },
  ],
  email: [
    { required: true, trigger: 'blur' },
  ],
  phone: [
    { required: true, trigger: 'blur' },
  ],

})

const cancle = () => {
  dialogVisible.value = false
}

const confirm = () => {
  dialogVisible.value = false
}

</script>
    
<template>


  <div class="manage-content-item">
    <div class="search-content">
      <span>用户名</span>
      <el-input class="search" v-model="input" placeholder="请输入账号名称" />
      <el-button type="primary" :icon="Search" size="large">Search</el-button>
    </div>
    <el-button type="primary" plain :icon="Plus" class="add" @click="addManage">新增</el-button>
    <el-table :data="tableData" style="width: 100%" height="640" :header-row-class-name="'table-header'">
      <el-table-column prop="username" label="账号" :align="'center'" />
      <el-table-column prop="jurisdiction" label="权限" :align="'center'" />
      <el-table-column prop="email" label="邮箱" :align="'center'" />
      <el-table-column prop="phone" label="电话" :align="'center'" />
      <el-table-column fixed="right" label="操作" :align="'center'">
        <template #default="scope">
          <el-button link type="primary" size="large" :icon="Edit" @click="editManage(scope.$index, scope.row)">
          </el-button>
          <el-button link type="primary" size="large" :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination" background layout="prev, pager, next" :total="50" />
    <el-dialog v-model="dialogVisible" :title="dialogTitle" width="30%">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
        :size="formSize" status-icon>
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="dialogTitle === '新增用户'">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="权限" prop="jurisdiction">
          <el-input v-model="ruleForm.jurisdiction" type="jurisdiction" autocomplete="off" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="ruleForm.phone" type="phone" autocomplete="off" />
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button size="large" @click="cancle">取消</el-button>
        <el-button type="primary" size="large" @click="confirm">确认</el-button>

      </template>
    </el-dialog>
  </div>


</template>
    
<style scoped lang="scss">
.manage-content-item {
  width: 100%;

  .search-content {
    display: flex;
    height: 80px;

    box-sizing: border-box;
    align-items: center;

    .search {
      width: 20%;
      height: 40px;
      // border-radius: 10px;
      margin-left: 10px;


      ::v-deep .el-input__wrapper {
        height: 100%;
        // border-radius: 10px;

      }

      ::v-deep.el-input__inner {
        font-size: 18px;

      }

      ::v-deep .el-input__icon {
        font-size: 22px;
        margin-right: 10px;
        cursor: pointer;
      }

      ::v-deep input::-webkit-input-placeholder {
        /* WebKit browsers，webkit内核浏览器 */
        color: #ccc;
        font-size: 16px;
      }
    }
  }

  .add {
    margin-bottom: 10px;
  }

  .el-table__inner-wrapper {
    .el-table__header {
      .table-header {
        .el-table__cell {
          background-color: #ccc;

        }
      }

    }
  }

  .pagination {
    margin-top: 10px;
    justify-content: center;

  }

}
</style>
    