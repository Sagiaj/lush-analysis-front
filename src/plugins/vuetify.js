import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/src/stylus/app.styl';
import { themeColors } from '../assets/styles/lush-palette';
Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        ...themeColors
    },
    options: {
        customProperties: true
    }
});
//# sourceMappingURL=vuetify.js.map