<template lang="pug">
  .app-body
    section.splash
      article
        img(src="~assets/images/logo.png")
        h1.title
          | learn
        //- h1
        h2.subtitle
          | ToolTwist Tech Stacks
        //- h2
        b-collapse(:open="false")
          button.button.is-default.is-large(slot="trigger") Get Started
          |
          hr
          h4.subtitle.is-size-4 Web Design / Front-End
          .columns.is-multiline.is-centered.is-flex
            .column.is-3.is-6-mobile
              a(target="_blank", href="//www.w3schools.com/html/")
                img(src="~assets/images/technology/tech-html.png")
              //- a
              p HTML
            //- column
            .column.is-3.is-6-mobile
              a(target="_blank", href="//www.w3schools.com/Css/")
                img(src="~assets/images/technology/tech-css.png")
              //- a
              p CSS
            //- column
            .column.is-3.is-6-mobile
              a(target="_blank", href="//www.w3schools.com/js/")
                img(src="~assets/images/technology/tech-js.png")
              //- a
              p Javascript
            //- column
            .column.is-3.is-6-mobile
              a(target="_blank", href="//pugjs.org/api/getting-started.html")
                img(src="~assets/images/technology/tech-pug.png")
              //- a
              p Pug
            //- column
            .column.is-3.is-6-mobile
              a(target="_blank", href="//sass-lang.com")
                img(src="~assets/images/technology/tech-sass.png")
              //- a
              p Sass
            //- column
            .column.is-3.is-6-mobile
              a(target="_blank", href="//getbootstrap.com")
                img(src="~assets/images/technology/tech-bootstrap.png")
              //- a
              p Bootstrap
            //- column
            .column.is-3.is-6-mobile
              a(target="_blank", href="//bulma.io")
                img(src="~assets/images/technology/tech-bulma.png")
              //- a
              p Bulma
            //- column
            .column.is-3.is-6-mobile
              a(target="_blank", href="//www.nngroup.com")
                img(src="~assets/images/technology/tech-ui.png")
              //- a
              p UI/UX
            //- column
          //- columns
          br
          br
          .container.technology
            h4.subtitle.is-size-4 Back-end
            .columns.is-multiline.is-centered.is-flex
              .column.is-3.is-6-mobile
                a(target="_blank", href="//nodejs.org/en/")
                  img(src="~assets/images/technology/tech-node.png")
                //- a
                p Node
              //- column
              .column.is-3.is-6-mobile
                a(target="_blank", href="//vuejs.org/")
                  img(src="~assets/images/technology/tech-vue.png")
                //- a
                p Vue
              //- column
              .column.is-3.is-6-mobile
                a(target="_blank", href="//nuxtjs.org")
                  img(src="~assets/images/technology/tech-nuxt.png")
                //- a
                p Nuxt
              //- column
              .column.is-3.is-6-mobile
                a(target="_blank", href="//angularjs.org")
                  img(src="~assets/images/technology/tech-angular.png")
                //- a
                p Angular
              //- column
              .column.is-3.is-6-mobile
                a(target="_blank", href="//reactjs.org")
                  img(src="~assets/images/technology/tech-react.png")
                //- a
                p React
              //- column
            //- columns
            br
            br
            h4.subtitle.is-size-4 Security
            .columns.is-multiline.is-centered.is-flex
              .column.is-3.is-6-mobile
                a(target="_blank", href="//www.owasp.org/index.php/Main_Page")
                  img(src="~assets/images/technology/tech-owasp.png")
                //- a
                p OWASP
              //- column
              .column.is-3.is-6-mobile
                a(target="_blank", href="//www.udemy.com/burp-suite/")
                  img(src="~assets/images/technology/tech-burp.png")
                //- a
                p Burp
              //- column
              .column.is-3.is-6-mobile
                a(target="_blank", href="//www.lynda.com/Linux-tutorials/Ethical-Hacking-Website-Web-Application-Testing/512727-2.html")
                  img(src="~assets/images/technology/tech-hacker.png")
                //- a
                p Ethical Hacking
              //- column
            //- columns
            br
            br
            h4.subtitle.is-size-4 Process
            .columns.is-multiline.is-centered.is-flex
              .column.is-3.is-6-mobile
                a(target="_blank", href="//agilemanifesto.org/")
                  img(src="~assets/images/technology/tech-agile.png")
                //- a
                p Agile Manifesto
              //- column
              .column.is-3.is-6-mobile
                a(target="_blank", href="//www.scrumguides.org/scrum-guide.html")
                  img(src="~assets/images/technology/tech-scrum.png")
                //- a
                p Scrum
              //- column
            //- columns
            br
            br
            h4.subtitle.is-size-4 SEO / SEM
            .columns.is-multiline.is-centered.is-flex
              .column.is-3.is-6-mobile
                a(target="_blank", href="//analytics.google.com/analytics/academy/ ")
                  img(src="~assets/images/technology/tech-analytics.png")
                //- a
                p Google Analytics
              //- column
            //- columns
            br
            br
            h4.subtitle.is-size-4 Tools
            .columns.is-multiline.is-centered.is-flex
              .column.is-3.is-6-mobile
                a(target="_blank", href="//mally.stanford.edu/~sr/computing/basic-unix.html")
                  img(src="~assets/images/technology/tech-terminal.png")
                //- a
                p Linux / Unix Commands
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
      font-size: 32px;
      // color: #526488;
      word-spacing: 5px;
      padding-bottom: 15px;
    }

    .links {
      padding-top: 15px;
    }
  }
</style>
