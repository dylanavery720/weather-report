const history = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_HISTORY':
      let searchHistory = [action.payload, ...state.searchHistory]
      return Object.assign({}, state, { searchHistory })
    default:
      return state;
  }
}

export default history;