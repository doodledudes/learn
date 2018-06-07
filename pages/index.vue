<template lang="pug">
  .app-body
    section.splash
      div
        h1.title
          | learn
        //- h1
        h2.subtitle
          | Technologies used in ToolTwist
        //- h2
        
      //- div
    //- section
  //- app-body
</template>
<script>
export default {
  head: {
    htmlAttrs: {
      // class: 'has-navbar-fixed-top'
    }
  }
}
</script>
<style lang="scss">
  .splash {
    & {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .title {
      font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
      display: block;
      font-weight: 300;
      font-size: 100px;
      // color: #35495e;
      letter-spacing: 1px;
    }

    .subtitle {
      font-weight: 200;
      font-size: 42px;
      // color: #526488;
      word-spacing: 5px;
      padding-bottom: 15px;
    }

    .links {
      padding-top: 15px;
    }
  }
</style>
