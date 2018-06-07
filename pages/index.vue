<template lang="pug">
  .app-body
    section.splash
      article
        img(src="~assets/images/logo.png")
        h1.title
          | learn
        //- h1
        h2.subtitle
          | Technologies used in ToolTwist
        //- h2
        b-collapse(:open="false")
          button.button.is-success.is-large(slot="trigger") Get Started
          | 
          br
          hr
          .container.technology
            .columns.is-multiline.is-centered
              .column.is-3
                a(href="/")
                  img(src="~assets/images/technology/tech-html.png")
                //- a
                p HTML
              //- column
              .column.is-3
                a(href="/")
                  img(src="~assets/images/technology/tech-css.png")
                //- a
                p CSS
              //- column
              .column.is-3
                a(href="/")
                  img(src="~assets/images/technology/tech-js.png")
                //- a
                p Javascript
              //- column
              .column.is-3
                a(href="/")
                  img(src="~assets/images/technology/tech-pug.png")
                //- a
                p Pug
              //- column
              .column.is-3
                a(href="/")
                  img(src="~assets/images/technology/tech-vue.png")
                //- a
                p Vue
              //- column
              .column.is-3
                a(href="/")
                  img(src="~assets/images/technology/tech-sass.png")
                //- a
                p Sass
              //- column
              .column.is-3
                a(href="/")
                  img(src="~assets/images/technology/tech-nuxt.png")
                //- a
                p Nuxt
              //- column
              .column.is-3
                a(href="/")
                  img(src="~assets/images/technology/tech-ui.png")
                //- a
                p UI/UX
              //- column
              .column.is-3
                a(href="/")
                  img(src="~assets/images/technology/tech-bootstrap.png")
                //- a
                p Bootstrap
              //- column
              .column.is-3
                a(href="/")
                  img(src="~assets/images/technology/tech-bulma.png")
                //- a
                p Bulma
              //- column
            //- columns
          //- container
        //- b-collapse
      //- article
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
      flex-flow: column;
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
