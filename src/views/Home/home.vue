<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(item, index) in recommendList" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">
          {{ item.name }}
        </p>
      </van-grid-item>
    </van-grid>
    <!-- 最新音乐 -->
    <van-cell title="最佳匹配" class="title" />
    <!-- <van-cell :label="item.song.artists[0].name" :title="item.name" v-for="(item,index) in newsongList" :key="item.id">
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" />
      </template>
    </van-cell> -->
    <songitemVue
      v-for="(item, index) in newsongList"
      :key="item.id"
      :author="item.author"
      :id="item.id"
      :name="item.name"
    ></songitemVue>
  </div>
</template>
<script>
import songitemVue from "@/components/songitem.vue"
import { getRecommendListApi, getNewsongListApi } from "@/api/index"
export default {
  props: {
    arr: {
      type: Array,
      default: () => [],
    },
    obj: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    songitemVue,
  },
  data() {
    return {
      recommendList: [], // 推荐歌单
      newsongList: [],
    }
  },
  methods: {
    async getPersonalized() {
      try {
        const res = await getRecommendListApi({ limit: 6 })
        // console.log(res);
        this.recommendList = res.data.result
      } catch (err) {
        console.log("出错误了")
      }
    },
    async getNewsong() {
      try {
        const res = await getNewsongListApi()
        // console.log(res.data.result);
        this.newsongList = res.data.result
      } catch (err) {
        console.log("出错误了")
      }
    },
  },
  mounted() {
    this.getPersonalized()
    this.getNewsong()
  },
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {},
  watch: {},
}
</script>
<style lang="less" scoped>
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
}

.van-cell__value {
  padding-top: 9px;
  flex: 0 0 30px;
}
</style>
