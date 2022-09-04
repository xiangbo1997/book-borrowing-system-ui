<script setup lang="ts">
import { ref,reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Avatar,
  ChatDotRound
} from '@element-plus/icons-vue'
import { Settings } from 'http2'

const router = useRouter()
// const route = useRoute()

interface MenuItem{
  name:string,
  id:string,
  code:string
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const gotToPage = (code: string) => {
  router.push({name:code})

}
const isCollapse = ref(false)

const menuList =reactive<MenuItem[]> ([
  {
    name: '首页',
    id:'1',
    code:'home'
  },
  {
    name: '图书书库',
    id:'2',
    code:'books'
  },
  {
    name: '借阅信息',
    id:'3',
    code:'borrow'
  },
  {
    name: '个人中心',
    id:'4',
    code:'personal'
  },
  {
    name: '运维管理',
    id:'5',
    code:'operation'
  }
])

</script>

<template>
  <el-menu
       default-active="1"
       class="el-menu-vertical-demo"
       @open="handleOpen"
       @close="handleClose"
       :collapse="isCollapse"
        >
          <el-menu-item  v-for="item in menuList" :index="item.id" :key="item.id" @click="gotToPage(item.code)">
              <el-icon v-if="item.code === 'home'"><location /></el-icon>
              <el-icon v-if="item.code === 'books'"><icon-menu /></el-icon>
              <el-icon v-if="item.code === 'borrow'"><ChatDotRound /></el-icon>
              <el-icon v-if="item.code === 'personal'"><avatar /></el-icon>
              <el-icon v-if="item.code === 'operation'"><setting /></el-icon>
              <span>{{item.name}}</span>
          </el-menu-item>
          <!-- <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>图书书库</span>
          </el-menu-item>
          <el-menu-item>
            <el-icon><icon-menu /></el-icon>
            <span>借阅信息</span>
          </el-menu-item>
          
          <el-menu-item index="3">
            <el-icon><avatar /></el-icon>
            <span>个人中心</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>运维管理</span>
          </el-menu-item> -->
         
  </el-menu>


</template>


<style scoped lang="scss">
.el-menu-vertical-demo{
 // font-size: 18px;
 .el-menu-item{
  font-size: 20px;
 }

}
</style>
