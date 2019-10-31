import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#5d4037',
        secondary: '#ffc107',
        success: '#3cd1c2',
        info: '#ffaa2c',
        error: '#f83e70',
      }
    },
    options: {
      customProperties: true,
    },
  },
});
