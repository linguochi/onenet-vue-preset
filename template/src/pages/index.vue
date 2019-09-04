<template>
    <div class="container">
        <div class="section home"><img src="../assets/logo.png"/>
            <HelloWorld></HelloWorld>
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

