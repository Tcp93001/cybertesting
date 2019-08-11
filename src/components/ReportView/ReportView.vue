<template>
  <v-container>
    <v-layout mb-5 row>
      <div class="pa-2 text-center display-1">Ahorros por Sistema</div>
    </v-layout>

    <v-divider ma-5></v-divider>

    <v-layout
      pt-5
      text-center
      wrap
    >
      <v-flex mx-4 full-width>
        <apexchart
          width="100%"
          height="300"
          type="bar"
          :options="options"
          :series="series"
        ></apexchart>
      </v-flex>

      <v-flex mx-5 full-width>
        <v-layout column pa-2>
          <v-flex xs12 text-center mb-5>
            <div class="title text-uppercase font-weight-bold">Tickets Solicitados por mes</div>
          </v-flex>

            <v-flex mb-5 xs12>
              <v-btn
                dark
                color="purple lighten-2"
                @click="populateData"
              >
                Generar datos aleatorios
              </v-btn>
            </v-flex>


            <v-layout align-center justify-center fill-height>
              <v-flex xs3>
                <div class="text-left text-truncate">Servicios Contratados</div>
              </v-flex>

              <v-flex xs3 px-1>
                <v-icon color="cyan">mdi-phone</v-icon>
                <v-text-field
                  name="t-phone"
                  label="Teléfono"
                  solo
                  :value="phone"
                  v-model="dataValuePhone"
                ></v-text-field>
              </v-flex>

              <v-flex xs3 px-1>

                <v-icon color="green">mdi-mail</v-icon>
                <v-text-field
                  name="t-phone"
                  label="Correo"
                  solo
                  :value="mail"
                  v-model="dataValueMail"
                ></v-text-field>
              </v-flex>

              <v-flex xs3 px-1>
                <v-icon color="amber">mdi-rotate-45 mdi-mouse</v-icon>
                <v-text-field
                  name="t-phone"
                  label="Sistema"
                  solo
                  :value="system"
                  v-model="dataValueSystem"
                ></v-text-field>
              </v-flex>

            </v-layout>


            <v-layout align-center justify-center fill-height>
              <v-flex xs3>
                <div class="text-left text-truncate">Tickets Genéricos</div>
              </v-flex>

              <v-flex xs3 px-1>
                <v-icon color="cyan">mdi-phone</v-icon>
                <v-text-field
                  name="g-phone"
                  label="Teléfono"
                  solo
                  :value="genPhone"
                  v-model="dataValueGenPhone"
                ></v-text-field>
              </v-flex>

              <v-flex xs3 px-1>

                <v-icon color="green">mdi-mail</v-icon>
                <v-text-field
                  name="g-mail"
                  label="Correo"
                  solo
                  :value="genMail"
                  v-model="dataValueGenMail"
                ></v-text-field>
              </v-flex>

              <v-flex xs3 px-1>
                <v-icon color="amber">mdi-rotate-45 mdi-mouse</v-icon>
                <v-text-field
                  name="g-system"
                  label="Sistema"
                  solo
                  :value="genSystem"
                  v-model="dataValueGenSystem"
                ></v-text-field>
              </v-flex>

            </v-layout>

        </v-layout>
      </v-flex>
    </v-layout>

    <v-divider ma-4></v-divider>

    <v-layout mb-5 row>
      <div class="pa-2 text-center display-1">Ahorros en tiempo</div>
    </v-layout>

    <v-layout mb-5 row>
      <div class="pa-2 text-center title">Resultados simulados</div>
    </v-layout>


    <v-layout row my-4 px-1>
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
            <div class="subtitle-1 text-center">{{ results.phoneTime }} hrs</div>
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
            <div class="subtitle-1 text-center">{{ results.mailTime }} hrs</div>
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
            <div class="subtitle-1 text-center">{{ results.systemTime }} hrs</div>
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
    
    <v-divider ma-4></v-divider>

    <v-layout mb-5 row>
      <div class="pa-2 text-center display-1">Ahorros en costos</div>
    </v-layout>


    <v-layout row my-4 px-1>
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
            <div class="subtitle-1 text-center">${{ results.phoneCost }}</div>
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
            <div class="subtitle-1 text-center">${{ results.mailCost }}</div>
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
            <div class="subtitle-1 text-center">${{ results.systemCost }}</div>
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
            Costo total
          </v-sheet>

          <v-card-text>
            <div class="title text-center">${{ totalTime * 100 }}</div>
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
            <div class="subtitle-1 text-center">${{ onlySystem * 100 }}</div>
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
            <div class="title text-center">${{ savingsWithSystem *100 }}</div>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>

  </v-container>
</template>

<script src='./ReportView.js' />
