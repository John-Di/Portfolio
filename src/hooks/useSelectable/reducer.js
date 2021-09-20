export const actionTypes = {
  add: 'ADD',
  remove: 'REMOVE',
  set: 'SET',
  get: 'GET',
  swap: 'SWAP',
  reset: 'RESET'
};

const selectableReducer = (selection, action) => {
  const { type, value } = action;
  const newSelection = selection;

  switch (type) {
    case actionTypes.add: {
      newSelection.push(+value);
      return newSelection
    }
    case actionTypes.remove: {
      const index = newSelection.indexOf(+value);
      if (index > -1) {
        newSelection.splice(index, 1);
      }
      return newSelection;
    }
    case actionTypes.set: {
      return [+value]
    }
    case actionTypes.reset: {
      return []
    }
    default: return selection;
  }
}

export default selectableReducer;