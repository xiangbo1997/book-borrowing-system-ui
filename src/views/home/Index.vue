<script setup lang="ts">
import BookList from '../../components/BookList.vue'

import { ref, reactive } from 'vue'
import { Search, } from '@element-plus/icons-vue'
const input = ref('')
import { ElMessageBox } from 'element-plus'



interface BooksList {
  name: string,
  category: string,
  position:string,
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
  position:string,
  jianjie: string
}
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


const img2 = reactive<ActivityItem[]>([
                    {img:'/src/assets/home/images/img4.jpg',name:'星际穿越的可能性',ren:'星际穿越的可能性',time:"2019年4月12日 15:00—16:30",position:'图书馆三楼3号大讲堂',jianjie:'作为科幻电影和科幻小说的常见题材，星际穿越一直是人们很久以来存在在心底的一个想要实现的梦乡。现如今不断发展的科学技术，也让我们觉得实现梦想指日可待。而此次讲座将为我们解释其真正实现的可能性和此技术所需要面临的一些实际问题。'},
                    {img:'/src/assets/home/images/img5.jpg',name:'威廉·米利根24重人格的一生',ren:'言钟教授（犯罪心理学家）',time:"2019年5月9日 15:00—16:30",position:'图书馆二楼1号大讲堂',jianjie:'作为《24个比利》的主人公，威廉·米丽根的一生也被大众所熟知，而解离性身份疾患（DID）这种心理疾病也用过图书、媒体、电影等大众媒体慢慢进入大众视野。作为美国犯罪心理学史上极为注明的案例，言钟教授将从独特的视角展开分析这一经典案例。'},
                    {img:'/src/assets/home/images/img6.jpg',name:'交响乐团中的小提琴们',ren:'江海瑶教授（小提琴演奏家）',time:"2019年5月10日 15:00—16:30",position:'图书馆二楼1号大讲堂',jianjie:'小提琴作为一个古老的乐器，在交响乐团中占有着举足轻重的重要地位。而在音乐室的长河中，更是不泛大量有关小提琴的乐谱长存于世。这次讲座，我们邀请著名的小提琴演奏家以及音乐史教授江海瑶先生为同学们解析小提琴的历史，以及小提琴在乐团中的作'}
                ])
const img = reactive<String[]>([
  '/src/assets/home/images/img1.jpg',
  '/src/assets/home/images/img2.jpg',
  '/src/assets/home/images/img3.jpg',
])

const dialogVisible = ref(false)
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}


</script>

<template>
<div class="home-warp">
  <div class="recommend">
    <div class="bg">
      <img src="@/assets/home/images/library.png" alt="">
    </div>
    <div class="hot-books">
        <div  class="topTitle" >
          <div  >
            <h2 >推荐图书</h2>
          </div>
          <div ><a  href="#/bookType" class=""><img
                src="data:image/png;base64,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"
                alt="" ></a></div>
        </div>
        <book-list :booksList="booksList"></book-list>
    </div>
    <div class="activity">
         <div class="topTitle">
                <el-col cols="9" :sm=9><h2 >推荐活动</h2></el-col>
                <el-col cols="1" :sm=1>
                    <a href="#"><img src="../assets/Gd.png" alt="" style="width: 2rem;float: right"></a>
                </el-col>
            </div>
            <el-carousel class="carousel-fade" fade  controls indicators >
                <el-carousel-item v-for="(item, index) in img" :key="index" :img-src="item">
                  <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
            <div class="active-list">
                <div  v-for="item in img2" :key="item.number"  class="active-item">
                  <el-row :gutter="10">
                        <el-col :xs="8" :sm="10" :md="12" :lg="14" :xl="14" >
                      <img :src="item.img" alt="" />
                    </el-col>
                    <el-col :xs="16" :sm="14" :md="10" :lg="10" :xl="10">
                        <h4>{{item.name}}</h4>
                        <p>讲座人：{{item.name}}</p>
                        <p>讲座时间：{{item.ren}}</p>
                        <p>讲座地点：{{item.time}}</p>
                        <p>讲座简介：{{item.jianjie}}</p>
                    </el-col>
                  </el-row>
                
                </div>
              
            </div>
    </div>
  </div>
  <div class="address">
    <p>联系方式：1762347869</p>

    <p>邮箱：1762347869@qq.com</p>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</div>

</template>


<style scoped lang="scss">

.home-warp {
  width: 100%;
  height: 100%;
  position: relative;
  // padding-bottom: 20px;

  .recommend{
    width: 100%;
    height: 690px;
    overflow-y: auto;
    
  
    .bg{
      width: 100%;
     
      img{
        width: 100%;
       
      }
    }

    .hot-books{
      width: 90%;
      margin: 0 auto;
        // padding: 20px;
      box-sizing: border-box;
      padding-bottom: 50px;
      .topTitle{
        font-size: 32px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
          width: 20px;
        }

      }

    }
    .activity{
      width: 90%;
      margin: 0 auto;
       .topTitle{
        font-size: 32px;
        font-weight: 400;
        }
        .carousel-fade{
          height: 400px;
          text-shadow: 0px 0px 2px #000;
          margin-top:5px;
          ::v-deep .el-carousel__container{
            height: 100%;
             .el-carousel__item{
             border-radius: 10px;
            img{
              border-radius: 10px;
            }
          }
          }
         

        }
        .active-list{
          margin-top: 90px;
          .active-item{
           margin-bottom: 60px;
           display: flex;
           h4{
            //  height: 50px;
            //  line-height: 50px;
            padding-bottom: 10px;
           }
           img{
             width: 100%;
             border-radius: 10px;
             box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5)
           }
           p{
             height: 26px;
           }
          }
        }
    }

  }
  .address{
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    p{
      height: 30px;
      line-height: 30px;
      margin-right: 20px;
    }
  }
}
</style>
