<template>
    <transition name="loading-fade">
        <div :class="['loading-base', {'other': isOther}]" v-if="isShow">
            <div class="loading">
                <div>
                    <!-- <img class="loading-gif" src="./logo.png"/> -->
                </div>
            </div>
        </div>
    </transition>
    <Spin fix v-if="ui==='iview' && isShow">
        <Icon type="ios-loading" size="18" class="spin-icon-load"></Icon>
        <div>Loading</div>
    </Spin>
    <div
    v-loading.fullscreen.lock="isShow"
    v-if="ui === 'element'"
    >
    </div>
</template>

<script>
export default {
    props: {
        isOther: {
            type: Boolean,
            default() {
                return false;
            }
        }
    },
    data() {
        return {
            isShow: false,
            ui: ""
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
    &.other {
        top: 50px;
        left: 200px;
    }
}
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    & > div {
        position: relative;
        padding-top: 1px;
        margin: -50%;
        height: 120px;
        width: 150px;
        span {
            color: #ffffff;
            font-size: 14px;
            text-align: center;
            display: block;
            position: absolute;
            margin-top: -15px;
            width: 100%;
        }
    }
    .loading-gif {
        display: block;
        margin: 28px auto;
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