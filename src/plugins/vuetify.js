import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    
    themes: {
      light: {
        colors: {
          background: '#657b83',
          surface: '#eee8d5',
          title: '#586e75',
          subtitle: '#657b83',
        },
      },
      dark: {
        colors: {
          background: '#002b36',
          surface: '#073642',
          title: '#93a1a1',
          subtitle: '#839496',
        }
      }
    },
  },
})
