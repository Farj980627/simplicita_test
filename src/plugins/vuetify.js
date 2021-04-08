
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
      
    },
    theme: {
        primary: "#0E918C",
        secondary:"#D2D3C9",
        naranja: "#f6830f",
        rojo: "#BB2205"
      },
      options: {
        customProperties: true
      }
    
    
});