
export function increment ({state, commit}) {
  commit('increment')
  alert('test state' + state.count)
}