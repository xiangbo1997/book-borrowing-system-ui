<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
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
const router = useRouter()
const menuStyle = ref<string>('10%')
const isCollapse = ref(false)
interface MenuItem {
  name: string,
  id: string,
  code: string
}
const menuList = reactive<MenuItem[]>([
  {
    name: '账号管理',
    id: '1',
    code: 'account'
  },
  {
    name: '图书管理',
    id: '2',
    code: 'booksManage'
  }
])
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
const input = ref<string>('')

const gotToPage = (code: string) => {
  router.push({name:code})

}

</script>
  
<template>
  <div class="operation-warp">
    <div class="manage-menu">
      <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-menu-item v-for="item in menuList" :index="item.id" :key="item.id" @click="gotToPage(item.code)">
          <el-icon v-if="item.code === 'account'">
            <location />
          </el-icon>
          <el-icon v-if="item.code === 'booksManage'">
            <icon-menu />
          </el-icon>
  
          <span>{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="manage-content">
      <router-view ></router-view>
    </div>

  </div>

</template>
  
<style scoped lang="scss">
.operation-warp {
  display: flex;

  .manage-menu {
    width: v-bind(menuStyle);
    padding-top: 35px;
    box-sizing: border-box;
  }

  .manage-content {
    width: calc(100% - v-bind(menuStyle));
    padding: 15px;

    .search-content {
      display: flex;
      height: 80px;
    
      box-sizing: border-box;
      align-items: center;
      
      .search {
        width: 20%;
        height: 40px;
        // border-radius: 10px;
        margin-left:10px ;


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
    .add{
      margin-bottom: 10px;
    }

  }
}
</style>
  