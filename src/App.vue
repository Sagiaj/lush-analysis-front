<template>
  <v-app dark>
    <v-toolbar app color="grey darken-4">
      <v-toolbar-title class="headline text-uppercase">
        <v-btn flat icon color="background--primary" @click="drawer = true">
          <v-icon>menu</v-icon>
        </v-btn>
        <span>Lush Analysis</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer absolute v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-btn flat icon color="primary" @click="drawer = false">
          <v-icon>cancel</v-icon>
        </v-btn>
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="src">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Text</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense class="pt-0">
        <v-list-tile>
            <v-list-tile-content>
              <v-btn flat icon color="primary" @click.native="goToNutrition()">
                <v-icon>local_dining</v-icon>
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  methods: {
    goToNutrition() {
      this.$router.push({
        name: 'NutritionPlan'
      })
    }
  },
  mounted() {
    console.log(this.$vuetify.theme);
  },
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style>

  /* GENERAL THEME BACKGROUND */
  .application.theme--dark {
    background: var(--v-accent-base) !important;
  }

  /* ELEMENTS BACKGROUND */
  .theme--dark.v-date-picker-table,
  .theme--dark.v-table, .theme--dark.v-tabs__bar,
  .theme--dark.v-date-picker-header, .application.theme--dark .v-list, .application.theme--dark .v-navigation-drawer, .theme--dark.v-card {
    background: var(--v-accent-base) !important;
  }
  
  /* TEXT ELEMENTS */
  text, textarea, p, a, table, span, table tr, th, td, .v-date-picker-table tbody div {
    color: var(--v-secondary-base);
  }

  /* NAVBR TEXT */
  nav span {
    color: var(--v-secondary-base);
  }


</style>

