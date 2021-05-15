const handleinitialState = () => {
  let initialState = localStorage.getItem("user");

  if (!initialState) {
    return (initialState = []);
  } else {
    return JSON.parse(initialState);
  }
};

const userReducer = (state = handleinitialState(), action) => {
  let newState;
  switch (action.type) {
    case "GET_USER":
      return state;

    case "ADD_USER":
      newState = state.concat([action.playload]);
      localStorage.setItem("user", JSON.stringify(newState));
      return newState;

    case "DELETE_USER":
      newState = state.filter((user) => user.userid !== action.playload);
      localStorage.setItem("user", JSON.stringify(newState));
      return newState;

    case "UPDATE_USER":
      newState = [...state];
      let index = newState.findIndex((user, i) => user.userid == action.id);
      newState[index] = action.playload;
      localStorage.setItem("user", JSON.stringify(newState));
      return newState;

    default:
      break;
  }
};

export default userReducer;
