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
      let index = state.findIndex((user, i) => user.userid == action.id);
      state[index] = action.playload;
      // state[index] = {
      //   userid: action.id,
      //   title: action.playload.title,
      //   fname: action.playload.fname,
      //   lname: action.playload.lname,
      //   birthday: action.playload.birthday,
      //   nation: action.playload.nation,
      //   gender: action.playload.gender,
      //   flags: action.playload.flags,
      //   phone: action.playload.phone,
      //   passportNo: action.playload.passportNo,
      //   expectedSalary: action.playload.expectedSalary,
      //   citizenID: action.playload.citizenID,
      // };
      localStorage.setItem("user", JSON.stringify(state));
      return state;

    default:
      break;
  }
};

export default userReducer;
