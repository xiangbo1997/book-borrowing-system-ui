<script setup lang="ts">
import { ref ,reactive} from 'vue'
import {Search} from '@element-plus/icons-vue'
import BookList from '../../components/BookList.vue'
import { getBookList} from '@/api'

interface BooksList {
  name: string,
  category: string,
  position:string,
  author: string,
  total: number,
  id: string,
  img: string
}
interface BookType {
  key: string,
  label: string
}
interface BookArea {
  key: string,
  label: string
}
interface BookYear {
  key: string,
  label: string
}
const input = ref('')
const currentType = ref('')
const currentArea = ref('')
const currentYear = ref('')

const booksList =  reactive<BooksList[]>([
  {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
  {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  },
   {
    name: '名利场',
    category: '文学类',
    position:'1234/2342',
    author: '威廉·梅克比斯·萨克雷',
    total: 4,
    id:'123456',
    img:'@/assets/home/images/book1.jpg'
  }
]
)

const bookType = reactive<BookType[]>([
  {
    key: 'all',
    label: '全部'
  },
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

const bookArea = reactive<BookArea[]>([
  {
    key: 'all',
    label: '全部'
  },
  {
    key: 'china',
    label: '中国'
  },
])
const bookYear = reactive<BookYear[]>([
  {
    key: 'all',
    label: '全部'
  },
  {
    key: '2022',
    label: '2022'
  },
  {
    key: '2021',
    label: '2021'
  },
  {
    key: '2020',
    label: '2020'
  },

])


const changeType = (key:string) => {
  currentType.value = key
}
const changeArea = (key:string) => {
  currentArea.value = key
}
const changeYear = (key:string) => {
  currentYear.value = key
}
getBookList({id:124})
.then((res:any) => {
  console.log(res)
})
.catch(()=>{})
</script>

<template>
<div class="books-warp">

  <div class="search">
     <el-input
        class="search"
        v-model="input"
        placeholder="请输入关键字/书名/书号/作者"
        :suffix-icon="Search"
      />
    
  </div>
  <div class="menu">
    <div class="book-type menu-item">
      <span>类型：</span>
      <ul>
        <li v-for="item in bookType" :key="item.key" :class="{'active-type': currentType === item.key}" @click="changeType(item.key)">{{item.label}}</li>
      </ul>
    </div>
    <div class="area menu-item">
      <span>地区：</span>
      <ul>
        <li v-for="item in bookArea" :key="item.key" :class="{'active-area': currentArea === item.key}" @click="changeArea(item.key)">{{item.label}}</li>
      </ul>
    </div>
    <div class="year menu-item">
      <span>年份：</span>
      <ul>
        <li v-for="item in bookYear" :key="item.key" :class="{'active-year': currentYear === item.key}" @click="changeYear(item.key)">{{item.label}}</li>
      </ul>
    </div>
  </div>
  
  <div class="books-catalogue">
      <book-list :booksList="booksList"></book-list>
  </div>

</div>

</template>

<style scoped lang="scss">
.books-warp{
  width: 100%;
  height: 100%;
  .search{
      width: 100%;
      height: 120px;
      position: relative;
   
      .search{
        width: 90%;
        margin: 0 auto;
        height: 60px;
        border-radius: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
       ::v-deep .el-input__wrapper{
          border-radius: 30px;

        }
        ::v-deep.el-input__inner{
          font-size: 18px;

        }
        ::v-deep .el-input__icon{
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
  .menu{
    width: 90%;
    margin: 0 auto;
    background: #fff;
    padding: 10px 0px;
    .menu-item{
      display: flex;
      span{
          padding: 8px 20px;
          box-sizing: border-box;
      }
      ul{
        display: flex;
        li{
          padding: 8px 14px;
          box-sizing: border-box;
          cursor: pointer;
          &.active-type{
            color: #409eff;
          }
          &.active-area{
            color: #409eff;
          }
          &.active-year{
            color: #409eff;
          }
        }
      }
    }
    
  }
  .books-catalogue{
    width: 100%;
    height: 590px;
    // padding-bottom: 50px;
    // box-sizing: border-box;
    overflow-y: auto;
    .list-warp{
       width: 90%;
      margin: 0 auto;
        // padding: 20px;
      box-sizing: border-box;
      padding-bottom: 50px;
    }
  }
}
</style>
