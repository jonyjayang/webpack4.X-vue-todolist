import Vue from 'vue'
import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:defaultState,
    mutations,
    getters

})
export default store;