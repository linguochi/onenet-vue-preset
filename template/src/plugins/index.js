import Vue from "vue";
import axios from "./axios";
import vueLoading from './loading.vue'
var loadingComponent = null,  loadingIndex = 0;
const loading = {
    show() {
        const div = document.createElement("div");
        div.innerHTML = `<vue-loading ></vue-loading>`;
        document.body.appendChild(div);
        loadingComponent = new Vue({
            el: div,
            components: { vueLoading }
        }).$children[0];
        loadingIndex == 0 && loadingComponent.show();
        loadingIndex += 1;
    },
    hide() {
        loadingIndex -= 1;
        loadingIndex == 0 && loadingComponent.hide();
    }
};
Object.defineProperties(Vue.prototype, {
    $http: {
        get(url, params, isLoading = false, config = {}) {
            isLoading = isLoading || false;
            isLoading && loading.show();
            return new Promise((resolve, reject) => {
                axios({
                    method: "get",
                    url,
                    params,
                    ...config
                })
                    .then(res => {
                        isLoading && loading.hide();
                        resolve(res.data);
                    })
                    .catch(err => {
                        isLoading && loading.hide();
                        reject(err.data);
                    });
            });
        },
        post(url, data, isLoading = false, config = {}) {
            isLoading = isLoading || false;
            isLoading && loading.show();
            return new Promise((resolve, reject) => {
                axios({
                    method: "post",
                    url,
                    data,
                    ...config
                })
                    .then(res => {
                        isLoading && loading.hide();
                        resolve(res.data);
                    })
                    .catch(err => {
                        isLoading && loading.hide();
                        reject(err.data);
                    });
            });
        }
    }
});
