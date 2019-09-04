<template>
    <div>
        <transition name="loading-fade" v-if="ui === 'none'">
            <div :class="loading-base" v-if="isShow">
                <div class="loading">
                    <div>
                        <svg viewBox="25 25 50 50" class="loading-gif">
                            <circle class="loading-circle" cx="50" cy="50" r="20" fill="none"></circle>
                        </svg>
                    </div>
                </div>
            </div>
        </transition>
        <Spin fix v-if="ui==='iview' && isShow">
            <Icon type="ios-loading" size="18" class="spin-icon-load"></Icon>
            <div>Loading</div>
        </Spin>
        <div v-loading.fullscreen.lock="isShow" v-if="ui === 'element'"></div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        ui: "none"
      };
    },
    components: {},
    methods: {
      show() {
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        this.isShow = true;
      },
      hide() {
        document.getElementsByTagName("body")[0].style.overflow = "inherit";
        this.isShow = false;
      }
    },
    mounted() {
      this.$loading
        ? (this.ui = "element")
        : this.$Spin
        ? (this.ui = "iview")
        : (this.ui = "none");
    }
  };
</script>
<style>
    .loading-fade-enter-active,
    .loading-fade-leave-active {
        transition: opacity 0.5s;
    }

    .loading-fade-enter,
    .loading-fade-leave-to {
        opacity: 0;
    }

    .loading-gif {
        animation: ani-load-loop2 1s linear infinite;
    }

    @keyframes ani-load-loop2 {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(360deg);
        }
    }
</style>

<style lang="less" scoped>
    .loading-base {
        position: fixed;
        top: 0;
        z-index: 1001;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .loading {
        position: absolute;
        top: 50%;
        left: 50%;

        & > div {
            position: relative;
            padding-top: 1px;
            margin: -50%;
            width: 42px;
            height: 42px;
        }

        .loading-gif {
            display: block;
            margin: 28px auto;
            width: 42px;
            height: 42px;

            .loading-circle {
                stroke-dasharray: 90, 150;
                stroke-width: 2;
                stroke: #409eff;
            }
        }
    }

    .spin-icon-load {
        animation: ani-demo-spin 1s linear infinite;
    }

    @keyframes ani-demo-spin {
        from {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>