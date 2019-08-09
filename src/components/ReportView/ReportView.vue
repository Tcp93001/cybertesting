<template>
  <v-container>
    <v-layout mb-5 row>
      <div class="pa-2 display-1">Reporte de Actividad por Costo</div>
    </v-layout>

    <v-divider ma-5></v-divider>

    <v-layout
      mt-5
      text-center
      wrap
    >
      <v-flex xs12 sm6>
        <apexchart
          width="100%"
          height="300"
          type="bar"
          :options="options"
          :series="series"
        ></apexchart>
      </v-flex>

      <v-flex xs12 md6>
        <v-layout column pa-2>
          <v-flex xs12 text-center mb-5>
            <div class="title text-uppercase font-weight-bold">Capture la cantidad de tickets</div>
          </v-flex>
          <v-layout align-baseline>
            <v-flex xs6>
              <div class="subtitle-1 text-right">Levantados en Llamada</div>
            </v-flex>

            <v-flex pl-2 offset-xs1 xs6>
              <v-text-field
                name="t-phone"
                label="Por teléfono"
                id="phone"
                outlined
                height="20"
                :value="phone"
                v-model="dataValuePhone"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout align-baseline >
            <v-flex xs6>
              <div class="subtitle-1 text-right">Levantados por correo</div>
            </v-flex>

            <v-flex pl-2 offset-xs1 xs6>
              <v-text-field
                name="t-mail"
                label="Por correo"
                id="mail"
                outlined
                height="20"
                :value="mail"
                v-model="dataValueMail"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout align-baseline >
            <v-flex xs6>
              <div class="subtitle-1 text-right ">Levantados por Sistema</div>
            </v-flex>

            <v-flex pl-2 offset-xs1 xs6>
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

          <v-layout ma-5 justify-end>
            <v-flex xs12>
              <v-btn
                dark
                width="100%"
                color="purple lighten-2"
                @click="populateData"
              >
                Generar datos
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-divider ma-4></v-divider>

    <v-layout row mt-4 px-1>
      <v-flex xs6 sm2 pa-2>
        <v-card
          color="light-blue lighten-4"
          height="100"
        >
          <v-sheet
            tile
            color="light-blue darken-2"
            class="text-center"
            dark
          >
            Teléfono
          </v-sheet>

          <v-card-text>
            <div class="subtitle-1 text-center">{{ phoneTime }} hrs</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6 sm2 pa-2>
        <v-card
          color="green lighten-4"
          height="100"
        >
          <v-sheet
            tile
            color="green darken-3"
            class="text-center"
            dark
          >
            Correo
          </v-sheet>

          <v-card-text>
            <div class="subtitle-1 text-center">{{ mailTime }} hrs</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6 sm2 pa-2>
        <v-card
          height="100"
        >
          <v-sheet
            tile
            color="amber darken-2"
            class="text-center"
            dark
          >
            Sistema
          </v-sheet>

          <v-card-text>
            <div class="subtitle-1 text-center">{{ systemTime }} hrs</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6 sm2 pa-2>
        <v-card color="grey lighten-4"
          height="100"
        >
          <v-sheet
            tile
            color="grey darken-3"
            class="text-center"
            dark
          >
            Tiempo total
          </v-sheet>

          <v-card-text>
            <div class="subtitle-1 text-center">{{ totalTime }} hrs</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6 sm2 pa-2>
        <v-card color="purple lighten-4"
          height="100"
        >
          <v-sheet
            tile
            color="purple lighten-2"
            class="text-center"
            dark
          >
           Solo sistema...
          </v-sheet>

          <v-card-text>
            <div class="subtitle-1 text-center">{{ onlySystem }} hrs</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6 sm2 pa-2>
        <v-card color="orange lighten-4"
          height="100"
        >
          <v-sheet
            tile
            color="amber darken-3"
            class="text-center"
            dark
          >
            ... Ahorrará
          </v-sheet>

          <v-card-text>
            <div class="title text-center">{{ savingsWithSystem }} hrs</div>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script src='./ReportView.js' />
