<template>
    <div>
        <dev-nav>
            <router-view></router-view>
        </dev-nav>
    </div>
</template>

<script>
  import devNav from '@/components/devNav';

  export default {
    components: {
      devNav
    }
  };
</script>

