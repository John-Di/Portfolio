export const actionTypes = {
  expand: 'EXPAND',
  lock: 'LOCK'
};

const collapisbleReducer = (state, action) => {
  const { type, isExpanded = false, isLocked = false } = action;

  switch (type) {
    case actionTypes.expand: {
      return {
        ...state,
        isExpanded: isExpanded || state.isLocked
      }
    }
    case actionTypes.lock: {
      return {
        isExpanded: isLocked,
        isLocked
      }
    }
    default: return state
  }
}

export default collapisbleReducer;