import Vue from 'vue';
import Antd from 'ant-design-vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Antd);
import 'ant-design-vue/dist/antd.css';
import App from './App';


Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');