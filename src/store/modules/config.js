const state = {
    theme: {
        is_dark: localStorage.is_dark || true,
    },
    map: {
        url: `https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=x1UxbPz4S3XPxg6AdHj12qOnoydCOeuUb7hCqeURpcK6OjmXu7E1OzODPq0Voiox`,
        attribution:
            '<a href=\\"https://www.jawg.io\\" target=\\"_blank\\">&copy; Jawg</a> - <a href=\\"https://www.openstreetmap.org\\" target=\\"_blank\\">&copy; OpenStreetMap</a>&nbsp;contributors',
    },
    mapZoom: localStorage.mapZoom!=undefined?localStorage.mapZoom:14,
}
const mutations = {
    setTheme:(state,value)=>{
        localStorage.is_dark = value
        state.is_dark = value
    },
    updateZoom: (state,value)=> state.zoom = value
}
const actions = {
    async updateZoom({commit},zoom){
        localStorage.mapZoom = zoom
        commit('updateZoom',zoom)
    }
}
const getters = {
    getMapAttribution: (state)=> state.map.attribution,
    getMapUrl: (state)=> state.map.url,
    getMapZoom: (state)=>state.zoom,
    getTheme: (state)=> state.theme,
}

export default {
    state,
    mutations,
    actions,
    getters
}