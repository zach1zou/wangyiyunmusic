<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="val"
      @change="inputFn"
    />
    <!-- 热门搜索 -->
    <template v-if="searchList.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          @click="clickFn(item.first)"
          color="#ccc"
          text-color="#000"
          style="margin-right: 6px"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in hotList"
          :key="index"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>

    <!-- 最佳匹配 -->
    <template v-else>
      <van-cell title="最佳匹配" />

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <songitemVue
          v-for="(item, index) in searchList"
          :key="index"
          :name="item.name"
          :author="item.ar[0].name"
          :id="item.id"
        >
        </songitemVue>
        <!-- <van-cell v-for="(item,index) in searchList" :key="index" :title="item.name"
          :label="item.ar[0].name" /> -->
      </van-list>
    </template>
  </div>
</template>
<script>
import { gethotSearchApi, getsearchReasultApi } from "@/api/index"
import songitemVue from "@/components/songitem.vue"

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
      hotList: [],
      val: "",
      searchList: [],

      loading: false,
      finished: false,
      page: 1,
      limit: 20,

      timer: null,
    }
  },
  methods: {
    async gethotSearch() {
      const res = await gethotSearchApi()
      this.hotList = res.data.result.hots
      // console.log(this.hotList);
    },
    async clickFn(value) {
      this.page = 1
      this.finished = false
      this.val = value
      const res = await getsearchReasultApi({
        keywords: this.val,
      })
      this.searchList = res.data.result.songs
      // console.log(res.data.result.songs);
    },
    async onLoad() {
      // console.log(1);

      try {
        const res = await getsearchReasultApi({
          keywords: this.val,
          limit: this.limit,
          offset: (this.page - 1) * this.limit,
        })
        console.log(res.data.result.songs)
        this.searchList = [...this.searchList, ...(res.data.result.songs || [])]
        this.loading = false
        this.page++
        if (res.data.result.songs == undefined) {
          this.finished = true
          this.loading = false
          return
        }
      } catch (error) {
        console.log(error)
        // this.searchList = []
      }
    },
    async inputFn() {
      // 引入防抖功能
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(async () => {
        this.page = 1
        this.finished = false

        if (!this.val.trim()) {
          this.searchList = []
          return
        }
        try {
          const res = await getsearchReasultApi({
            keywords: this.val,
          })
          this.searchList = res.data.result.songs
        } catch (error) {
          this.searchList = []
        }
      }, 1000)
    },
    // async getSearchList() {
    //   try {
    //     const res = await getsearchReasultApi({
    //       keywords: this.val
    //     })
    //     this.searchList = res.data.result.songs
    //   } catch (error) {
    //     this.searchList = []
    //   }
    // }
  },
  mounted() {
    this.gethotSearch()
  },
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {},
  watch: {},
}
</script>
<style lang="less" scoped></style>
