<script setup lang="ts">

import { ref, reactive } from 'vue'
import { Search, } from '@element-plus/icons-vue'
const input = ref('')
import { ElMessageBox } from 'element-plus'







interface BooksList {
  name: string,
  category: string,
  position: string,
  author: string,
  total: number,
  id: string,
  img: string
}
interface ActivityItem {
  img: string,
  name: string,
  ren: string,
  time: string,
  position: string,
  jianjie: string
}

interface BookInfo {
  name: string,
  category: string,
  position: string,
  author: string,
  total: number,
  remaining: number
  introduction: string,
  img: string
}


defineProps<{
  booksList: BooksList;
}>();



const dialogVisible = ref(false)

const bookInfo = reactive<BookInfo>({
  img: '/src/assets/home/images/book1.jpg',
  name: '名利场',
  category: '文学类',
  position: '1234/2342',
  author: '威廉·梅克比斯·萨克雷',
  total: 340,
  remaining: 4,
  introduction: '《名利场》（Vanity Fair）是十九世纪英国批判现实主义作家威廉·梅克比斯·萨克雷创作的长篇小说。作者以圆熟泼辣的手笔，淋漓尽致地描绘了一幅十九世纪英国贵族资产阶级上层骄奢淫逸、勾心斗角的生活图景，无情地揭露了封建贵族荒淫无耻、腐朽堕落的本质和资产阶级追名逐利、尔虞我诈的虚伪面目。1847年1月，萨克雷在刚创办了不到六年的《笨拙周报》上，初次以自己的真名发表了小说《名利场》的前四章，随后按月刊发，一共十九期，到次年7月收官。小说尚未全部发表，已经被公认为当代杰作。 2004年，《名利场》被搬上银幕。',
})
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

const getBookInfo = (id: () => void) => {
  console.log(id);
  dialogVisible.value = true;

}
const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}


</script>

<template>
  <div class="list-warp">
    <div class="books-list">
      <el-row :gutter="20">
        <el-col :span="8" v-for="item in booksList" :key="item.id" class="book-item-col">
          <div class="book-item">
            <div class="book-cover">
              <img src="@/assets/home/images/book1.jpg" alt="" @click="getBookInfo(item.id)" />
            </div>
            <div class="book-info">
              <h4>{{item.name}}</h4>
              <p>{{item.category}}</p>
              <p>书号：{{item.position}}</p>
              <p>作者：{{item.author}}</p>
              <p>剩余：{{item.total}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog v-model="dialogVisible" title="图书详情" width="60%">
      <el-row :gutter="10" class="book-info-all">
        <el-col :span="10" style="margin-bottom: 20px"><img :src="bookInfo.img" alt="" class="imgs"></el-col>
        <el-col :span="14">
          <h4>{{bookInfo.name}}</h4>
          <p style="margin: 4px">{{bookInfo.category}}类</p>
          <p style="margin: 4px">书号：{{bookInfo.position}}</p>
          <p style="margin: 4px">作者：{{bookInfo.author}}</p>
          <p style="margin: 4px">剩余：{{bookInfo.remaining}}</p>
          <p style="margin: 4px">简介：{{bookInfo.introduction}}</p>
        </el-col>

      </el-row>
      <template #footer>
        <div class="jssh">
          <span>借阅天数： </span>
          <el-input-number v-model="num" :min="1" :max="10" controls-position="left" size="large"
            @change="handleChange" />
            <el-button  size="large">取消借阅</el-button>
            <el-button type="primary" size="large">开始借阅</el-button>
        </div>
      </template>
    </el-dialog>
  </div>

</template>


<style scoped lang="scss">
.list-warp {
  width: 100%;
  height: 100%;
  position: relative;

  .books-list {
    width: 100%;
    overflow: hidden;

    // display: flex;
    //  flex-wrap: wrap;
    // justify-content: space-between;
    .book-item-col {
      min-width: 310px;

      .book-item {
        margin-top: 15px;
        display: flex;

        .book-cover {
          width: 30%;
          min-width: 108px;

          img {
            width: 100%;
            border-radius: 10px;
            height: 180px;
            cursor: pointer;
          }

        }

        .book-info {
          h4 {
            font-size: 20px;
          }

          margin-left: 20px;

          p {
            // margin: 4px;
            line-height: 26px;
          }
        }

      }
    }
  }

  .book-info-all {
    display: flex;
    margin-top: 15px;
    flex-wrap: wrap;
    font-family: 微软雅黑;

    img {
      width: 100%;
    }

    h4 {
      font-size: 26px;
      font-weight: bold;

    }

    p {
      margin: 4px;
      font-size: 18px;
      line-height: 30px;
    }
  }
  .jssh{
    span{
      color: rgb(9, 166, 210);
      font-size: 18px;
    }
    .el-button{
      margin-left: 15px;

    }

  }
}
</style>
