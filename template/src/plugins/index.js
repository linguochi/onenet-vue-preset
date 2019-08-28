import Vue from "vue";
import axios from "./axios";
import vueLoading from './loading.vue'
const loading = {
    show(isLoading) {
        const div = document.createElement("div");
        div.innerHTML = `<vue-loading ></vue-loading>`;
        if (isLoading == "other") {
            div.innerHTML = `<vue-loading :is-other="true"></vue-loading>`;
        }
        document.body.appendChild(div);
        loadingComponent = new Vue({
            el: div,
            components: { vueLoading }
        }).$children[0];
        loadingIndex == 0 && loadingComponent.show();
        loadingIndex += 1;
    },
    hide(isLoading) {},
    error(isLoading) {}
};
Object.defineProperties(Vue.prototype, {
    $http: {
        get(url, params, isLoading = false, config = {}) {
            isLoading = isLoading || false;
            isLoading && loading.show(isLoading);
            return new Promise((resolve, reject) => {
                axios({
                    method: "get",
                    url,
                    params,
                    ...config
                })
                    .then(res => {
                        isLoading && loading.hide(isLoading);
                        resolve(res.data);
                    })
                    .catch(err => {
                        isLoading && loading.error(isLoading);
                        reject(err.data);
                    });
            });
        },
        post(url, data, isLoading = false, config = {}) {
            isLoading = isLoading || false;
            isLoading && loading.show(isLoading);
            return new Promise((resolve, reject) => {
                axios({
                    method: "post",
                    url,
                    data,
                    ...config
                })
                    .then(res => {
                        isLoading && loading.hide(isLoading);
                        resolve(res.data);
                    })
                    .catch(err => {
                        isLoading && loading.error(isLoading);
                        reject(err.data);
                    });
            });
        }
    }
});
