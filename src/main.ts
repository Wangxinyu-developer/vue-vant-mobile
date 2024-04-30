import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import vueEsign from 'vue-esign';
import Vant from 'vant';
import 'vant/lib/index.css';

import SignCanvas from '@/components/signCanvas.vue';

createApp(App)
	.component('SignCanvas', SignCanvas)
	.use(router)
	.use(Vant)
	.use(vueEsign as any)
	.mount('#app');
