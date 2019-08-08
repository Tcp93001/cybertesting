<template>
  <v-container ma-1>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12 sm6>
        <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
      </v-flex>

      <v-flex mb-4>

      </v-flex>

 
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src='./MainView.js' />
