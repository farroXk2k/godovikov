<template>
  <div id="app">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Header from './/components/AppHeader.vue'
import Footer from './/components/AppFooter.vue'
import './assets/reset.css' // Подключаем reset.css
import './assets/main.css'   // Подключаем main.css

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
