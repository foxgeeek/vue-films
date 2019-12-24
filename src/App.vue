<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    showNavbar () {
      return this.$route.name !== 'dashboard' && this.$route.name !== 'login'
    }
  }
}
</script>

<style lang="scss">
</style>
