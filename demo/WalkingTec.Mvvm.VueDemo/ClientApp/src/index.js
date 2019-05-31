import Vue from "vue";
import router from "@/router/index";
import store from "@/store/index/index";
import App from "@/pages/index/app.vue";
import "@/assets/css/index.less";
import "babel-polyfill";
// 饿了吗ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

/* eslint-disable */
const app = new Vue({
    router,
    store,
    render(h) {
        return h(App, {
            props: {
                projectName: "trade"
            }
        });
    }
});

app.$mount("#App");
