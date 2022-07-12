<template>
  <div>
    <router-view></router-view>
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
    }
  },
  methods: {
  },
  mounted () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>

</style>
