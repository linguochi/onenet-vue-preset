<template>
    <div class="hello">
        <h1>Welcome to your vue.js app!</h1>
        <p>按下'Alt + Q'组合键可以打开顶部导航，方便开发环境使用</p>
        <h3>预设的页面</h3>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/default">Default</router-link>
            </li>
        </ul>
        <h3>内置的插件</h3>
        <ul>
            <li><a target="_blank" href="https://router.vuejs.org/">vue-router</a></li>
            <li><a target="_blank" href="https://vuex.vuejs.org/">vuex</a></li>
            <li><a target="_blank" href="http://lesscss.org/">less</a></li>
            <li><a target="_blank" href="https://pugjs.org">pug</a></li>
            <li><a target="_blank" href="https://github.com/axios/axios">axios</a></li>
            <li><a target="_blank" href="https://github.com/ktsn/vue-cli-plugin-auto-routing">auto-routing</a></li>
            <li><a target="_blank" href="https://github.com/nguyenvanduocit/vue-cli-plugin-style-resources-loader">style-resources-loader</a>
            </li>
            <%_ if(options['ui-framework']==='element-ui') { _%>
            <li><a target="_blank" href="http://element-cn.eleme.io">element-ui</a></li>
            <%_ } else if(options['ui-framework']==='iview') { _%>
            <li><a target="_blank" href="http://element-cn.eleme.io">iview</a></li>
            <%_ } _%>
        </ul>
    </div>

</template>


<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  };
</script>

<style scoped lang="less">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 10px;
    }

    a {
        color: #42b983;
    }
</style>
