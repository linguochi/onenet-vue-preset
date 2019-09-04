<template>
    <div id="app">
        <div class="container">
            <div class="section home"><img src="../assets/logo.png"/>
                <HelloWorld></HelloWorld>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>


<script>
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "home",
    components: {
      HelloWorld
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

