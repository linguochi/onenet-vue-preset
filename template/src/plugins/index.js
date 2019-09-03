import Vue from 'vue';
import axios from './axios';
// import './element.js'
// import 'quill/dist/quill.snow.css'
<% if (options['ui-framework'] === 'element-ui') {%>
    let loadingComponent ={}; 
<% } %>
const loading = {
    show() {
        <% if (options['ui-framework'] === 'element-ui') {%>
            loadingComponent = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
        <% } %>
        <% if (options['ui-framework'] === 'iview') {%>
            this.$Spin.show();
        <% } %>
    },
    hide() {     
        <% if (options['ui-framework'] === 'element-ui') {%>
            loadingComponent.close();
        <% } %>
        <% if (options['ui-framework'] === 'iview') {%>
            this.$Spin.hide();
        <% } %>   
    }
};

Object.defineProperties(Vue.prototype, {
    $http: {
        get(url, params, isLoading = false) {
            isLoading = isLoading || false;
            isLoading && loading.show();
            return new Promise((resolve, reject) => {
                axios({
                    method: "get",
                    url,
                    params
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
        post(url, data, isLoading = false) {
            isLoading = isLoading || false;
            isLoading && loading.show();
            return new Promise((resolve, reject) => {
                axios({
                    method: "post",
                    url,
                    data
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
