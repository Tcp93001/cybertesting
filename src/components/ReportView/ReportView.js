import VueApexCharts from 'vue-apexcharts'

const MINUTE = 1
const TICKET_TIME = {
  PHONE: 20 * MINUTE,
  MAIL: 15 * MINUTE,
  SYSTEM: 5 * MINUTE,
  GEN_PHONE: 30 * MINUTE,
  GEN_MAIL: 25 * MINUTE,
  GEN_SYS: 15 * MINUTE
}

export default {
  name: 'MainView',
  components: {
    'apexchart': VueApexCharts
  },
  data: () => ({
    options: {
      chart: {
        id: 'Cybersec-example'
      },
      xaxis: {
        categories: ['Costo (pesos)', 'Tiempo (hrs)']
      },
      dataLabels: {
        style: {
          colors: ['#000']
        }
      },
      responsive: [{
        breakpoint: 400,
        options: {
          plotOptions: {
            bar: {
              horizontal: true
            }
          }
        }
      }],
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
    genPhone: 0,
    genMail: 0,
    genSystem: 0,
    results: {
      mailCost: 0,
      mailTime: 0,
      phoneCost: 0,
      phoneTime: 0,
      systemCost: 0,
      systemTime: 0
    }
  }),

  computed: {
    dataValueSystem: {
      get () {
        return this.system
      },
      set (value) {
        this.calculateFieldValue(value, 'system')
      }
    },

    dataValueMail: {
      get () {
        return this.mail
      },
      set (value) {
        this.calculateFieldValue(value, 'mail')
      }
    },

    dataValuePhone: {
      get () {
        return this.phone
      },
      set (value) {
        this.calculateFieldValue(value, 'phone')
      }
    },

    dataValueGenSystem: {
      get () {
        return this.genSystem
      },
      set (value) {
        this.calculateFieldValue(value, 'gen_sys')
      }
    },

    dataValueGenMail: {
      get () {
        return this.genMail
      },
      set (value) {
        this.calculateFieldValue(value, 'gen_mail')
      }
    },

    dataValueGenPhone: {
      get () {
        return this.genPhone
      },
      set (value) {
        this.calculateFieldValue(value, 'gen_phone')
      }
    },

    savingsWithSystem () {
      // Este objeto puede ser enviado como un objeto JSON a través de algún método HTTP
      // const sendJSON = JSON.stringify(this.results)
      //

      return (this.totalTime - this.onlySystem).toFixed(2)
    },

    totalTime () {
      return (parseFloat(this.results.mailTime) + parseFloat(this.results.phoneTime) + parseFloat(this.results.systemTime)).toFixed(2)
    },

    onlySystem () {
      return (((
        (this.phone + this.mail + this.system) * TICKET_TIME.SYSTEM +
        (this.genPhone + this.genMail + this.genSystem) * TICKET_TIME.GEN_SYS
      ) / 60).toFixed(2))
    }
  },
  methods: {
    populateData () {
      this.calculateFieldValue(this.randomNumber(), 'phone')
      this.calculateFieldValue(this.randomNumber(), 'mail')
      this.calculateFieldValue(this.randomNumber(), 'system')
      this.calculateFieldValue(this.randomNumber(18), 'gen_phone')
      this.calculateFieldValue(this.randomNumber(18), 'gen_mail')
      this.calculateFieldValue(this.randomNumber(18), 'gen_sys')
    },

    randomNumber (limit) {
      const max = !limit ? 95 : limit
      const min = 8
      return Math.floor(Math.random() * (max - min)) + min
    },

    calculateFieldValue (value, ticketMethod) {
      let results = this.results

      let inputData = Number(value)
      inputData = isNaN(inputData) ? 0 : inputData
      switch (ticketMethod) {
        case 'phone':
          this.phone = inputData
          results.phoneTime = ((this.phone * TICKET_TIME.PHONE + this.genPhone * TICKET_TIME.GEN_PHONE) / 60).toFixed(2)
          results.phoneCost = Math.floor(results.phoneTime * 100).toFixed(0)
          this.series[0].data = [results.phoneCost, results.phoneTime]
          break
      
        case 'mail':
          this.mail = inputData
          results.mailTime = ((this.mail * TICKET_TIME.MAIL + this.genMail * TICKET_TIME.GEN_MAIL) / 60).toFixed(2)
          results.mailCost = (results.mailTime * 100).toFixed(0)
          this.series[1].data = [results.mailCost, results.mailTime]
          break

        case 'system':
          this.system = inputData
          results.systemTime = ((this.system * TICKET_TIME.SYSTEM + this.genSystem * TICKET_TIME.GEN_SYS) / 60).toFixed(2)
          results.systemCost = (results.systemTime * 100).toFixed(0)
          this.series[2].data = [results.systemCost, results.systemTime]
          break

        case 'gen_phone':
          this.genPhone = inputData
          results.phoneTime = ((this.phone * TICKET_TIME.PHONE + this.genPhone * TICKET_TIME.GEN_PHONE) / 60).toFixed(2)
          results.phoneCost = (results.phoneTime * 100).toFixed(0)
          this.series[0].data = [results.phoneCost, results.phoneTime]
          break

        case 'gen_mail':
          this.genMail = inputData
          results.mailTime = ((this.mail * TICKET_TIME.MAIL + this.genMail * TICKET_TIME.GEN_MAIL) / 60).toFixed(2)
          results.mailCost = (results.mailTime * 100).toFixed(0)
          this.series[1].data = [results.mailCost, results.mailTime]
          break
        
        case 'gen_sys':
          this.genSystem = inputData
          results.systemTime = ((this.system * TICKET_TIME.SYSTEM + this.genSystem * TICKET_TIME.GEN_SYS) / 60).toFixed(2)
          results.systemCost = (results.systemTime * 100).toFixed(0)
          this.series[2].data = [results.systemCost, results.systemTime]
          break

        default:
          break
      }
    }
  }
}
