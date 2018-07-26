import Vue from 'vue'
import moment from 'moment'
Vue.filter('date-format',function (value,format='HH:mm:ss') {
  return moment(value).format(format)
})
