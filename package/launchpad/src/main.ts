

import { createApp } from 'vue'
import { createClient, fetchExchange } from '@urql/core'
import urql from '@urql/vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from './App.vue'


const client = createClient({
  url: 'http://localhost:3000/graphql',
  exchanges: [fetchExchange]
})
const app = createApp(App)
app.use(Toast, {})
app.use(urql, client)

app.mount('#app')
