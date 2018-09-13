import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import appModule from './app';
import eventsModule from './events';
// import { forOwn } from 'lodash';

Vue.use(Vuex);
// Mongoose.Promise = global.Promise

const debug = process.env.NODE_ENV !== 'production';

const modules = {
  appModule,
  eventsModule
};
let plugins = debug ? [createLogger()] : [];
// forOwn(modules, module => {
//   if (module.plugins) {
//     plugins = plugins.concat(module.plugins);
//     delete module.plugins;
//   }
// });

export default new Vuex.Store({
  modules: modules,
  strict: debug,
  plugins: plugins
});
