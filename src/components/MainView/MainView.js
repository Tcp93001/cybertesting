import VueApexCharts from 'vue-apexcharts'

const MINUTE = 1
const TICKET_TIME = {
  PHONE: 20 * MINUTE,
  MAIL: 15 * MINUTE,
  SYSTEM: 5 * MINUTE
}

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
        categories: ['Tickets', 'Tiempo']
      },
      dataLabels: {
        style: {
          colors: ['black']
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            style: {
              colors: ['red']
            }
          }
        }
      }
    },
    series: [
      {
        name: 'Teléfono',
        data: [0, 0]
      },
      {
        name: 'Correo',
        data: [0, 0]
      },
      {
        name: 'Sistema',
        data: [0, 0]
      }
    ],
    phone: 0,
    mail: 0,
    system: 0,
    finalResult: {}
  }),
  computed: {
    dataValueSystem: {
      get () {
        return this.system
      },
      set (value) {
        let inputData = Number(value)
        if (isNaN(inputData)) {
          inputData = 0
        }
        this.system = inputData
        this.series[2].data = [inputData, (inputData * TICKET_TIME.SYSTEM / 60).toFixed(1)]
      }
    },

    dataValueMail: {
      get () {
        return this.mail
      },
      set (value) {
        let inputData = Number(value)
        if (isNaN(inputData)) {
          inputData = 0
        }
        this.mail = inputData
        this.series[1].data = [inputData, (inputData * TICKET_TIME.MAIL / 60).toFixed(1)]
      }
    },

    dataValuePhone: {
      get () {
        return this.phone
      },
      set (value) {
        let inputData = Number(value)
        if (isNaN(inputData)) {
          inputData = 0
        }
        this.phone = inputData
        this.series[0].data = [inputData, (inputData * TICKET_TIME.PHONE / 60).toFixed(1)]
      }
    },

    savingsWithSystem () {
      this.finalResult = {
        totalTime: this.totalTime,
        savingOnTime: (this.totalTime - this.onlySystem).toFixed(1)
      }

      // Este objeto puede ser enviado como un objeto JSON a través de algún método HTTP
      // const sendJSON = JSON.stringify(this.finalResult)
      //

      return (this.totalTime - this.onlySystem).toFixed(1)
    },

    phoneTime () {
      return (this.phone * TICKET_TIME.PHONE / 60).toFixed(2)
    },

    mailTime () {
      return (this.mail * TICKET_TIME.MAIL / 60).toFixed(2)
    },

    systemTime () {
      return (this.system * TICKET_TIME.SYSTEM / 60).toFixed(2)
    },

    totalTime () {
      return (parseFloat(this.systemTime) + parseFloat(this.mailTime) + parseFloat(this.phoneTime)).toFixed(1)
    },

    onlySystem () {
      return ((this.phone + this.mail + this.system) * TICKET_TIME.SYSTEM / 60).toFixed(1)
    }
  },
  methods: {
    populateData () {
      this.phone = this.randomNumber()
      this.series[0].data = [this.phone, (this.phone * TICKET_TIME.PHONE / 60).toFixed(1)]
      this.mail = this.randomNumber()
      this.series[1].data = [this.mail, (this.mail * TICKET_TIME.MAIL / 60).toFixed(1)]
      this.system = this.randomNumber()
      this.series[2].data = [this.system, (this.system * TICKET_TIME.SYSTEM / 60).toFixed(1)]
    },

    randomNumber () {
      const max = 46
      const min = 4
      return Math.floor(Math.random() * (max - min)) + min
    }

  }
}
