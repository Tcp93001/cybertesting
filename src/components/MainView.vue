<template>
  <v-container>
    <v-layout mb-5 row>
      <div class="display-1">Reporte de Actividad por Tiempo</div>
    </v-layout>

    <v-divider ma-5></v-divider>

    <v-layout
      mt-5
      text-center
      wrap
    >
      <v-flex xs12 sm6>
        <apexchart width="100%" type="bar" :options="options" :series="series"></apexchart>
      </v-flex>

      <v-flex xs6>
        <v-layout column pa-2>
          <v-flex xs6 text-center mb-3>
            <div class="title text-uppercase font-weight-bold">Capture la cantidad de tickets</div>
          </v-flex>
          <v-layout align-baseline>
              <v-flex xs6>
                <div class="subtitle-1 text-right">Levantados en Llamada</div>
              </v-flex>

              <v-flex pl-2 xs6>
                <v-text-field
                  name="t-phone"
                  label="Por teléfono"
                  id="phone"
                  outlined
                  height="20"
                  :value="phone"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout align-baseline >
              <v-flex xs6>
                <div class="subtitle-1 text-right">Levantados por correo</div>
              </v-flex>

              <v-flex pl-2 xs6>
                <v-text-field
                  name="t-mail"
                  label="Por correo"
                  id="mail"
                  outlined
                  height="20"
                  :value="mail"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout align-baseline >
              <v-flex xs6>
                <div class="subtitle-1 text-right ">Levantados por Sistema</div>
              </v-flex>

              <v-flex pl-2 xs6>
                <v-text-field
                  name="t-system"
                  label="Por sistema"
                  id="system"
                  outlined
                  height="20"
                  :value="system"
                  v-model="dataValueSystem"
                ></v-text-field>
              </v-flex>
            </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row px-1>
      <v-flex xs12 sm4 px-2>
        <v-card
          color="green"
        >
          <v-sheet
            tile
            color="indigo darken-3"
            class="text-center"
            dark
          >
            Acumulado por Teléfono
          </v-sheet>

          <v-card-text>
            <div class="title text-center">$$$</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4 px-2>
        <v-card
          color="green"
        >
          <v-sheet
            tile
            color="indigo darken-3"
            class="text-center"
            dark
          >
            Acumulado por Correo
          </v-sheet>

          <v-card-text>
            <div class="title text-center">$$$</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4 px-2>
        <v-card
          color="green"
        >
          <v-sheet
            tile
            color="indigo darken-3"
            class="text-center"
            dark
          >
            Acumulado por Sistema
          </v-sheet>

          <v-card-text>
            <div class="title text-center">$$$</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src='./MainView.js' />
