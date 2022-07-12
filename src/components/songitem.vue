<template>
  <div>
    <van-cell :label="author" :title="name">
      <template>
        <van-icon
          color="#000"
          name="play-circle-o"
          size="28"
          @click="goToPlay"
        />
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  props: {
    author: String,
    name: String,
    id: Number,
  },
  components: {},
  data() {
    return {}
  },
  methods: {
    goToPlay() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id, // 歌曲id, 通过路由跳转传递过去
        },
      })
    },
  },
  mounted() {},
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {},
  watch: {},
}
</script>
<style lang="less" scoped></style>
