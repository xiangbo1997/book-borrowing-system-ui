<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import HeaderNav from './views/menu/Index.vue';
import asideMenu from './views/asideMenu/Index.vue';

const showHeader = ref<string[]> (['home','books', 'borrow', 'personal', 'operation', 'booksManage', 'account'])
</script>

<template>
  <div class="warp">
     <el-container class="container" v-if="showHeader.includes($route.name)">
       <!-- 头部 -->
      <el-header class="header" >
          <header-nav></header-nav>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="300px" class="aside">
           <aside-menu></aside-menu>
        </el-aside>
        <!-- 主体 -->
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <router-view v-else></router-view>


  </div>
</template>

<style scoped  lang="scss">
.warp{
  width: 100%;
  height: 100%;
  .container{
    width: 100%;
    height: 100%;
    .header{
      width: 100%;
      height: $navHeight ;
      background-color: $navbgcolor;

    }
    .el-container{
      height: calc(100% - $navHeight);

    }
    .aside{
      // width: $asideWidth;
      height: $asideHeight;
      background-color: $asidebgcolor;
    }
    .main{
      // width: $mainWidth;
      height: $mainHeight;
      background-color: $mainbgcolor;
      padding: 0;
      box-sizing: border-box;
    }
  }
}
</style>
