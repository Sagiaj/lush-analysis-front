<template>
  <v-app dark>
    <v-toolbar app color="purple lighten-1">
      <v-toolbar-title class="headline text-uppercase">
        <v-btn flat icon color="purple lighten-3" @click="drawer = true">
          <v-icon>menu</v-icon>
        </v-btn>
        <span>Lush Analysis</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer absolute v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-btn flat icon color="purple lighten-3" @click="drawer = false">
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
  data () {
    return {
      drawer: false
    }
  }
}
</script>
