const state = {
    grid : [],
    activation : false


}

const mutations = {
    setGrid: (state, payload) => {
        state.grid = payload
    },
    activate: (state, payload) => {
        state.grid[`column${payload.column}`][`box${payload.id}`].state = true;
    },
    deactivate: (state, payload) => {
        state.grid[`column${payload.column}`][`box${payload.id}`].state = false;
    },
    activationEnabled: (state) => {
        state.activation = true;
    },
    activationDisabled: (state) => {
        state.activation = false;
    }
}

const actions = {
    makeGrid: ({commit}) => {
        let grid = {};
        let id = 0;
        for (let i = 0; i <= 49; i++) {
            grid[`column${i}`] = {};
            grid[`column${i}`][`box${id}`] = {id : id, column: i, state : false, row : 24};
            id++;
            for (let j = 1; j <= 24; j++) {
                grid[`column${i}`][`box${id}`] = {id : id, column: i, state : false, row : 24-j};
                id++;
            }
        }
        commit('setGrid', grid)

    },
    boxActivate: ({commit}, payload) => {
        commit('activate', payload);


    },
    boxDeactivate: ({commit}, payload) => {
        commit('deactivate', payload)

    },
    enableActivation: ({commit}) => {
        commit('activationEnabled')
    },
    disableActivation: ({commit}) => {
        commit('activationDisabled')
    }

}

const getters = {
    grid: state => state.grid,
    activation: state => state.activation
}

export default {
    state,
    mutations,
    actions,
    getters
}