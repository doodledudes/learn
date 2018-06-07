<template lang="pug">
  div
    //- public-header
    <nuxt/>
</template>
<script>
// import Header from '~/components/PublicHeader.vue'

export default {
  head: {
    htmlAttrs: {
      // class: 'has-navbar-fixed-top'
    }
  },
  components: {
    // 'public-header': Header
  }
}
</script>
<style lang="scss">

</style>
