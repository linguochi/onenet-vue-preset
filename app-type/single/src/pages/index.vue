<template>
    <div class="container">
        <div class="section home">
            <HelloWorld></HelloWorld>
        </div>
    </div>
</template>


<script>
  import HelloWorld from '@/components/HelloWorld.vue';
  import api from '../api';
  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    mounted() {
      api.user.getUser({ url: '/api/ddd' }).then(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        },
      );
    }
  };
</script>

<style lang="less" scoped>
    .home {
        .center;
        .size(24px);
        padding: 60px 0;
    }
</style>

