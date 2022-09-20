<script  lang="ts">
import { defineComponent, ref, reactive } from "vue";
import type { FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import { isvalidatePassword } from '@/utils/tool'
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
interface Password {
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
}


export default defineComponent({
  setup() {
    const router = useRouter()
    const formSize = ref('default')
    const validatePassword = (rule: any, value: any, callback: any) => {
      if (isvalidatePassword(value)) {
        callback(new Error(isvalidatePassword(value)));
      } else {
        callback();
      }
    }

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
    const userInfo: UserInfo = {
      userName: 'zhangxb',
      password: '123445',
      img: '/src/assets/menu/images/headImg.jpg'
    }
    let dialogVisible = ref<boolean>(false)
    const ruleForm = reactive<Password>({
      oldPassword: '12345zxb',
      newPassword: '12345zxbc',
      confirmPassword: '12345zxbc'
    })
    const validateConfirmPassword = (rule: any, value: any, callback: any) => {
       console.log(ruleForm.newPassword, value)
      if (ruleForm.newPassword === value) {
        callback();
      } else {
        callback(new Error('两次输入的密码不一致'));
      }
    }
    const methods = {
      changeMenu(value: any) {
        if (value === 'password') {
          dialogVisible.value = true
        }
        if (value === 'loginout') {
          router.replace({
            name: 'login'
          })
        }
      }
    }
    const rules = reactive<FormRules>({
      oldPassword: [
        { required: true, trigger: 'blur' },
      ],
      newPassword: [
        { trigger: 'blur', validator: validatePassword  },
      ],
      confirmPassword: [
        { trigger: 'blur', validator: validateConfirmPassword },
      ]
    })



    return {
      ...methods,
      tabList,
      userInfo,
      dialogVisible,
      ruleForm,
      formSize,
      rules
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

    <div class="user-info">
      <div class="user-img">
        <img :src="userInfo.img" alt="">
      </div>
      <el-dropdown @command="changeMenu">
        <span class="el-dropdown-link">
          {{userInfo.userName}}

        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="password">密码设置</el-dropdown-item>
            <el-dropdown-item command="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

    </div>
    <el-dialog v-model="dialogVisible" title="修改密码" width="30%">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
        :size="formSize" status-icon>
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input v-model="ruleForm.oldPassword"   type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input v-model="ruleForm.newPassword"   type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="ruleForm.confirmPassword"  type="password" autocomplete="off" />
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

<style scoped  lang="scss">
//导航高度


.menu-warp {
  width: 100%;
  height: 100%;
  color: $navFontColor;
  display: flex;
  justify-content: space-between;

  .logo {
    width: 8%;
    min-width: 125px;
    height: 100%;
    line-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;

    img {
      width: 40px;
      height: 40px;
    }

    .text {
      color: #fff;
      margin-left: 10px;
      font-size: 18px;
    }
  }

  .user-info {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .user-img {
      width: 50px;
      height: 50px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        cursor: pointer;
      }
    }

    .user-name {
      color: #fff;

    }

    .el-dropdown-link {
      color: #fff;
      margin-left: 10px;
      font-size: 18px;
    }

    .user-info {}
  }

}
</style>
