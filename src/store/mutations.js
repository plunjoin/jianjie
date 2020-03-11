export default {
    editOpening(state, status) {
        state.opening = status
    },
    editMenu(state) {
        state.menu = !state.menu
    },
    saveIsTitleTrue(state) {
        state.isTitle = true
    },
    saveIsTitleFalse(state) {
        state.isTitle = false
    }
}