<template>
  <v-app>
    <v-app-bar
      color="#2c5583"
      dark
      app
    >
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Tickets Sistema vs. Otras fuentes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        dark
        active-class="purple"
        href="/"
        link
      >
        Tiempo
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        text
        dark
        active-class="purple"
        href="/reporte"
        link
      >
        Costo
      </v-btn>

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
        {{ new Date().getFullYear() }} — <strong>CyberSec</strong>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  })
}
</script>
