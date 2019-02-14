import Vue from 'vue'
import Vuex from 'vuex'
import layoutGrid from './modules/layoutGrid.js'
import gridAudio from './modules/gridAudio.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        layoutGrid: layoutGrid,
        gridAudio: gridAudio
    }
});