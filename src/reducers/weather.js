const weather = (state = {}, action) => {
  switch (action.type) {
    case 'DISPLAY_FORECAST':
      return Object.assign({}, state, { forecast: action.payload })
    default:
      return state;
  }
}

export default weather;