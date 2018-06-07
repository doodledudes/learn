<template lang="pug">
  nav.navbar.is-white.is-fixed-top
    .container
      .navbar-brand
        a.navbar-item(href="/")
          img(src="@/assets/images/logo.png", alt="Advisor-e.com")
        //- a
        .navbar-burger.burger(data-target="navbarExampleTransparentExample", @click="toggleNavbar()", v-bind:class="{'is-active': isActive}")
          span
          span
          span
        //- navbar-burger
      //- navbar-brand
      #navbarExampleTransparentExample.navbar-menu(v-bind:class="{'is-active': isActive}")
        .navbar-start
          a.navbar-item(href="/") Web Design
          a.navbar-item(href="/") UI/UX
          a.navbar-item(href="/") Backend Development
        //- navbar-start
        .navbar-end
          .navbar-item
            //- .field.is-grouped
            //-   p.control
            //-     a.button.is-light(href="/login")
            //-       span Log in
            //-     //- a
            //-   //- p
            //-   p.control
            //-     a.button.is-success(href="/signup")
            //-       span Free Trial
            //-     //- a
            //-   //- p
            //- //- field
          //- navbar-item
        //- navbar-end
      //- navbar-menu
    //- container
  //- nav
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive
    },
  }
}
</script>

<style>

</style>
