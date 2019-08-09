import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'MainView',
  components: {
    'apexchart': VueApexCharts
  },
  data: () => ({
    options: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: ['Tickets y Tiempo']
      },

    },
    series: [
      {
        name: 'Teléfono',
        data: [0, 0, 0]
      },
      {
        name: 'Correo',
        data: [0, 0, 0]
      },
      {
        name: 'Sistema',
        data: [0, 0, 0]
      }
    ],
    phone: 0,
    mail: 0,
    system: 0
  }),
  computed: {
    dataValueSystem: {
      get () {
        return this.system
      },
      set (value) {
        this.system = value
        this.series[2].data[0] = value
        console.log(this.system)
      }
    }
  }
}