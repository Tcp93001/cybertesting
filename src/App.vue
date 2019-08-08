<template>
  <v-app>
    <v-app-bar
      color="#2c5583"
      dark
      app
    >
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Comparativa de costos</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img
        src="../src/assets/logo_global_final_cert_fondo_azul.png"
        height="40"
        width="40"
        contain
      ></v-img>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer
      padless
      dark
      color="#2c5583"
      height="60"
    >
      <v-flex
        text-center
        xs-12
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import MainView from './components/MainView.vue'
export default {
  name: 'App',
  components: {
    MainView
  },
  data: () => ({
    //
  })
}
</script>
