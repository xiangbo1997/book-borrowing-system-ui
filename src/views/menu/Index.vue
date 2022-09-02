<script  lang="ts">
import { defineComponent, onBeforeMount, onMounted } from "vue";
import { ArrowDown } from '@element-plus/icons-vue'
interface TabList {
  path: string;
  label: string;
  id: string;
}
interface UserInfo {
  userName: string;
  password: string;
  img: string;
}

export default defineComponent({
  setup() {
    const tabList: Array<TabList> = [
      {
        path: "/home",
        label: "首页",
        id: "1",
      },
      {
        path: "/home",
        label: "图书流程",
        id: "2",
      },
      {
        path: "/home",
        label: "图书流程",
        id: "2",
      },
      {
        path: "/personal",
        label: "个人中心",
        id: "3",
      },
   
    ];
    const userInfo:UserInfo= {
      userName: 'zhangxb',
      password: '123445',
      img: '/src/assets/menu/images/headImg.jpg'
    }
    const methods = {
      test(){
        console.log(this.tabList)
        this.tabList.push({label:111})
      }
    }
    


    return {
      ...methods,
      tabList,
      userInfo
    };
  },
});
</script>

<template>
  <div class="menu-warp">
    <div class="logo">
      <img src="@/assets/menu/images/logo.png" alt="">
      <span class="text">Books</span>
    </div>
    <!-- <ul class="menu-item">
      <li v-for="item in tabList" :key="item.id" @click="test">{{item.label}}</li>
    </ul> -->
    <div class="user-info">
      <div class="user-img">
        <img :src="userInfo.img" alt="">
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{userInfo.userName}}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- <div class="user-name">{{userInfo.userName}}</div> -->

    </div>
  </div>
</template>

<style scoped  lang="scss">
//导航高度


.menu-warp{
  width: 100%;
  height: 100%;
  color:  $navFontColor;
  display: flex;
  justify-content: space-between;
  .logo{
    width: 8%;
    min-width: 125px;
    height: 100%;
    line-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    img{
        width: 40px;
        height: 40px;
    }
    .text{
      color: #fff;
      margin-left: 10px;
      font-size: 18px;
    }
  }

  .user-info{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .user-img{
      width:50px;
      height: 50px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .user-name{
      color: #fff;
     
    }
    .el-dropdown-link{
      color: #fff;
       margin-left: 10px;
       font-size: 18px;
    }
    .user-info{

    }
  }

}
</style>
