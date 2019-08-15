<template>
    <div class="container">
        <div class="card">
            <p>计算机名称 #hostname</p>
            <p>操作系统平台 #platform</p>
            <p>操作系统类型 #type</p>
            <p>操作系统版本 #release</p>
            <p>CPU #cpu</p>
            <p>系统内存 #totalmem</p>
            <p>用户信息 #userInfo</p>
            <p>用户目录 #homedir</p>
            <p>网络状态 #networkInterfaces</p>
        </div>
    </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    computed: {},
    methods: {
      async fetchData() {
        Promise.all([]);
      }
    },
    created() {
    },
    mounted() {
      this.fetchData();
    }
  };
</script>

<style lang="less" scoped>
    .card {
        .pd;
    }
</style>
