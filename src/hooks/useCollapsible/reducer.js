export const actionTypes = {
  expand: 'EXPAND',
  lock: 'LOCK',
  height: 'HEIGHT'
};

const collapisbleReducer = (state, action) => {
  const { type, isExpanded = false, isLocked = false, height = 0 } = action;

  switch (type) {
    case actionTypes.expand: {
      return {
        ...state,
        isExpanded: isExpanded || state.isLocked
      }
    }
    case actionTypes.lock: {
      return {
        ...state,
        isExpanded: isLocked,
        isLocked
      }
    }
    case actionTypes.height: {
      return {
        ...state,
        height
      }
    }
    default: return state
  }
}

export default collapisbleReducer;