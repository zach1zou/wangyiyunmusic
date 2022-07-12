<template>
  <div>
    <div class="layout" style="padding-bottom:48px">
      <van-nav-bar :title="$route.meta.title" />
      <router-view></router-view>
      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  props:{ 
arr: 
 {
 type: Array,
 default: () =>[]
} ,
obj: 
 {
 type: Object,
 default: () =>{}
} 
}, 
  components: {
  },
  data () {
    return {
      title: "",
    }
  },
  methods: {

  },
  mounted() {
    // this.title = this.$route.meta.title
  },
  updated() {
    // console.log(this.$route.meta.title);
  // this.title=this.$route.meta.title
  },
  beforeDestroy () {
  },
  filters: {
  },
  computed: {
  },
  watch: {
    // $route(newVal, oldVal) {
    //   this.title = this.$route.meta.title
    // }
  },
}
</script>
<style lang="less" scoped>

</style>
