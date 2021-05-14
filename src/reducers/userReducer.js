const handleinitialState = () => {
  let initialState = localStorage.getItem('user')

  if (!initialState) {
    return initialState = []
  }
  else {
    return JSON.parse(initialState)
  }
}

const userReducer = (state = handleinitialState(), action) => {
  switch (action.type) {
    case "GET_USER":
      return state;

    case "ADD_USER":
      let newState = state.concat([action.playload])
      localStorage.setItem('user', JSON.stringify(newState))
      return newState;

    default:
      break;
  }
};

export default userReducer;
