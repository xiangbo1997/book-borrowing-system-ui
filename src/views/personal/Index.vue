<script setup lang="ts">
import { ref, reactive } from 'vue';
import { EditPen } from '@element-plus/icons-vue';
import type { FormInstance, FormRules } from 'element-plus'
import BookList from '../../components/BookList.vue'

interface BooksList {
  name: string,
  category: string,
  position: string,
  author: string,
  total: number,
  id: string,
  img: string
}


interface PersonalInfo {
  username: string,
  password: string,
  sex: string,
  level: string,
  area: string,
  age: number,
  hobby: string,
  introduction: string,
  birth: string

}
interface AreaOptions {
  label: string,
  value: string
}

const personalInfo = reactive<PersonalInfo>({
  username: "天使之翼",
  password: "1234567zxb",
  sex: 'man',
  level: 'Lv2',
  area: '天津',
  age: 24,
  hobby: '读书',
  birth: '2022-02-01',
  introduction: '活波开朗，乐于参加社交活动'
})

const dialogVisible = ref<boolean>(false)
const formSize = ref('default')
const ruleForm = reactive<PersonalInfo>({
  username: "天使之翼",
  password: "1234567zxb",
  sex: 'man',
  level: 'Lv2',
  area: '天津',
  age: 24,
  hobby: '读书',
  birth: '2022-02-01',
  introduction: '活波开朗，乐于参加社交活动'
})
const value2 = ref('2021-10-29')
const options = reactive<AreaOptions[]>([
  {
    value: "北京",
    label: "北京"
  },
  {
    value: "天津",
    label: "天津"
  }, 
  {
    value: "上海",
    label: "上海"
  },
  {
    value: "广州",
    label: "广州"
  },
  {
    value: "深圳",
    label: "深圳"
  },
  {
    value: "河北",
    label: "河北"
  }
])
const booksList = reactive<BooksList[]>([
  {
    name: '名利场',
    category: '文学类',
    position: '1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id: '123456',
    img: '@/assets/home/images/book1.jpg'
  },
  {
    name: '名利场',
    category: '文学类',
    position: '1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id: '123456',
    img: '@/assets/home/images/book1.jpg'
  },
  {
    name: '名利场',
    category: '文学类',
    position: '1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id: '123456',
    img: '@/assets/home/images/book1.jpg'
  }
]
)

</script>
  
<template>
  <div class="personal-warp">
    <div class="top">
      <img src="/src/assets/menu/images/headImg.jpg" alt="">
      <div class="personal-info">
        <div class="name-level">
          <div class="name-level-left">
            <h4 class="name">{{personalInfo.username}}</h4>
            <p>
              <span>{{personalInfo.level}}</span>
              <img
                :src="personalInfo.sex === 'man'? '/src/assets/personal/images/man.png':'/src/assets/personal/images/woman.png'"
                alt="">
            </p>
          </div>
          <el-button round :icon="EditPen" @click="dialogVisible = true">编辑个人信息</el-button>
        </div>
        <div class="other-info">
          <ul>
            <li><span>所在地区: </span>{{personalInfo.area}}</li>
            <li><span>生日: </span>{{personalInfo.age}}</li>
            <li><span>个人爱好: </span>{{personalInfo.hobby}}</li>
            <li><span>个人介绍: </span>{{personalInfo.introduction}}</li>
          </ul>
        </div>

      </div>
    </div>
    <div class="bottom">
      <h4>借阅历史</h4>
      <book-list :booksList="booksList"></book-list>

    </div>

    <el-dialog v-model="dialogVisible" title="编辑个人信息" width="30%">
      <el-form ref="ruleFormRef" :model="ruleForm" label-width="120px" class="demo-ruleForm" :size="formSize"
        status-icon>
        <el-form-item label="昵称:">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="爱好:">
          <el-input v-model="ruleForm.hobby" type="textarea" />
        </el-form-item>
        <el-form-item label="介绍:">
          <el-input v-model="ruleForm.introduction" :show-word-limit="true" type="textarea" />
        </el-form-item>
        <el-form-item label="性别:">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio :label="'man'">男</el-radio>
            <el-radio :label="'woman'">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期:">
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="请选择出生日期"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
        <el-form-item label="地区:">
          <el-select v-model="ruleForm.area" class="m-2" placeholder="Select" size="large">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">确认</el-button>
          <el-button type="primary" @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>

</template>
  
<style scoped lang="scss">
.personal-warp {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  .top {
    height: 220px;
    width: 100%;
    display: flex;
    // align-items: center;
    justify-content: space-between;

    img {
      width: 190px;
      height: 190px;
      border-radius: 50%;
    }

    .personal-info {
      width: calc(100% - 210px);

      .name-level {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #5150503b;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .name-level-left {
          h4 {
            height: 36px;
            font-size: 22px;
            font-weight: 900;
          }

          p {
            display: flex;
            align-items: center;

            span {
              margin-right: 5px;
            }

            img {
              width: 24px;
              height: 24px;
            }
          }

        }
      }

      .other-info {
        width: 100%;

        ul {
          li {
            height: 30px;
            line-height: 30px;
            color: #999;

            span {
              color: #000;
              margin-right: 15px;
            }
          }
        }

      }
    }
  }
  .bottom{
    width: 100%;
    padding: 0px 40px;
    box-sizing: border-box;
  }
}
</style>
  