import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import { focusDirective, clickOutside } from './directives'
// import { format } from 'date-fns'
import 'element-plus/dist/index.css'
import './styles/global.scss'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const app = createApp(App)

app.config.globalProperties.$filters = {

}

app.directive('focus', focusDirective)
app.directive('clickoutside', clickOutside)

app.component('Datepicker', Datepicker);

app.use(router)
app.use(store)
app.use(ElementPlus)
// app.use(format)

app.mount('#app')

