import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  '@/assets/styles/reset.css'
import  '@/assets/mobile/flexible'
Vue.config.productionTip = false


// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);
// import  Button  from 'vant'
// import 'vant/lib/button/style';
// Vue.use(Button);
import {  List,Tabbar, TabbarItem, NavBar,Cell, CellGroup,Grid, GridItem, Image as VanImage,Icon,Search,Tag  } from 'vant';
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tag);
Vue.use(List);

// import { getRecommendListApi } from '@/api/index'
// async function fn() { 
//   try {
//     const res = await getRecommendListApi();
//     console.log(res);
//   } catch (error) {
//       console.log(error);
//   }
// }
// fn()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
