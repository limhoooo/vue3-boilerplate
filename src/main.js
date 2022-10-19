import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()


window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    location.reload();
  }
});
createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')