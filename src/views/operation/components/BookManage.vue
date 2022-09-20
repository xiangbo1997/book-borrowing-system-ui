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
  name: string,
  category: string,
  position: string,
  author: string,
  total: number,
  id: string,
  img: string,
  introduction: string
}

interface BookType {
  key: string,
  label: string
}


const tableData = reactive<TableData[]>([
  {

    name: '名利场',
    category: '文学类',
    position: '1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id: '123456',
    img: '/src/assets/home/images/book1.jpg',
    introduction: '《名利场》（Vanity Fair）是十九世纪英国批判现实主义作家威廉·梅克比斯·萨克雷创作的长篇小说。作者以圆熟泼辣的手笔，淋漓尽致地描绘了一幅十九世纪英国贵族资产阶级上层骄奢淫逸、勾心斗角的生活图景，无情地揭露了封建贵族荒淫无耻、腐朽堕落的本质和资产阶级追名逐利、尔虞我诈的虚伪面目。1847年1月，萨克雷在刚创办了不到六年的《笨拙周报》上，初次以自己的真名发表了小说《名利场》的前四章，随后按月刊发，一共十九期，到次年7月收官。小说尚未全部发表，已经被公认为当代杰作。 2004年，《名利场》被搬上银幕。'
  },

])
const input = ref<string>('')
const dialogVisible = ref<boolean>(false)
const dialogTitle = ref<string>('新增用户')
const formSize = ref<string>('default')

const addManage = () => {
  dialogTitle.value = '新增图书'
  dialogVisible.value = true
}
const editManage = (index: number, row: Object): void => {
  dialogTitle.value = '编辑图书'
  dialogVisible.value = true
}
const ruleForm = reactive({
  name: '名利场',
  category: '文学类',
  position: '1234/2342',
  author: '威廉·梅克比斯·萨克雷',
  total: 4,
  id: '123456',
  img: '/src/assets/home/images/book1.jpg',
  introduction: '《名利场》（Vanity Fair）是十九世纪英国批判现实主义作家威廉·梅克比斯·萨克雷创作的长篇小说。作者以圆熟泼辣的手笔，淋漓尽致地描绘了一幅十九世纪英国贵族资产阶级上层骄奢淫逸、勾心斗角的生活图景，无情地揭露了封建贵族荒淫无耻、腐朽堕落的本质和资产阶级追名逐利、尔虞我诈的虚伪面目。1847年1月，萨克雷在刚创办了不到六年的《笨拙周报》上，初次以自己的真名发表了小说《名利场》的前四章，随后按月刊发，一共十九期，到次年7月收官。小说尚未全部发表，已经被公认为当代杰作。 2004年，《名利场》被搬上银幕。'
})

const bookType = reactive<BookType[]>([

  {
    key: 'recommend',
    label: '推荐图书'
  },
  {
    key: 'literature',
    label: '文学'
  },
  {
    key: 'history',
    label: '历史'
  },
  {
    key: 'social',
    label: '社会科学'
  },
  {
    key: 'art',
    label: '艺术'
  },
])


const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入图书名称', trigger: 'blur' },
  ],
  category: [
    { required: true, message: '请选择图书分类', trigger: 'triger' },
  ],
  position: [
    { required: true, message: '请填写图书位置', trigger: 'blur' },
  ],
  author: [
    { required: true, message: '请选择图书位置', trigger: 'blur' },
  ],
  total: [
    { required: true, message: '请输入图书数量', trigger: 'blur' },
  ],
  img: [
    { required: false, message: '请上传图书封面', trigger: 'blur' },
  ],
  introduction: [
    { required: false, message: '请填写图书描述', trigger: 'blur' },
  ],
})

const cancle = () => {
  dialogVisible.value = false
}

const confirm = () => {
  dialogVisible.value = false
}

const handleAvatarSuccess = () => {

}

const beforeAvatarUpload = () => {

}

</script>
      
<template>


  <div class="book-manage">
    <div class="search-content">
      <span>书名</span>
      <el-input class="search" v-model="input" placeholder="请输入账号名称" />
      <el-button type="primary" :icon="Search" size="large">Search</el-button>
    </div>

    <el-button type="primary" plain :icon="Plus" class="add" @click="addManage">新增</el-button>
    <el-table :data="tableData" style="width: 100%" height="640" :header-row-class-name="'table-header'">
      <el-table-column label="封面" :align="'center'">
        <template #default="scope">
          <img :src="scope.row.img" alt="暂无封面" width="32">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="书名" :align="'center'" />
      <el-table-column prop="author" label="作者" :align="'center'" />
      <el-table-column prop="category" label="分类" :align="'center'" />
      <el-table-column prop="position" label="位置" :align="'center'" />
      <el-table-column prop="total" label="总数" :align="'center'" />
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
        <el-form-item label="书名" prop="name">
          <el-input v-model="ruleForm.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="分类" prop="category">
          <el-select v-model="ruleForm.category" class="m-2" placeholder="选择分类" size="large">
            <el-option v-for="item in bookType" :key="item.key" :label="item.label" :value="item.key" />
          </el-select>

        </el-form-item>
        <el-form-item label="位置" prop="position">
          <el-input v-model="ruleForm.position" type="position" autocomplete="off" />
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input v-model="ruleForm.author" type="author" autocomplete="off" />
        </el-form-item>

        <el-form-item label="总数" prop="total">
          <el-input-number v-model="ruleForm.total" :min="1" controls-position="left" size="large"></el-input-number>
        </el-form-item>
        <el-form-item label="封面" prop="img">
          <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="ruleForm.img" :src="ruleForm.img" class="avatar"  width="45"/>
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="描述" prop="introduction">
          <el-input v-model="ruleForm.introduction" :show-word-limit="true" type="textarea" />
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
.book-manage {
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
      