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

    case "EDIT_USER":
      newState = state
      newState.map((user) => {
        if (user.userid == action.id) {
          {
            ...user,
            userid: action.id,
            title: action.playload.title,
            fname: action.playload.fname,
            lname: action.playload.lname,
            birthday: action.playload.birthday,
            nation: action.playload.nation,
            gender: action.playload.gender,
            flags: action.playload.flags,
            phone: action.playload.phone,
            passportNo: action.playload.passportNo,
            expectedSalary: action.playload.expectedSalary,
            citizenID: action.playload.citizenID,
          };
        }
      });
      // let newState1 = state;
      // console.log("newState", newState);
      // let index = state.findIndex((user, i) => user.userid == action.id);
      // // newState1[index] = {
      // userid: action.id,
      // title: action.playload.title,
      // fname: action.playload.fname,
      // lname: action.playload.lname,
      // birthday: action.playload.birthday,
      // nation: action.playload.nation,
      // gender: action.playload.gender,
      // flags: action.playload.flags,
      // phone: action.playload.phone,
      // passportNo: action.playload.passportNo,
      // expectedSalary: action.playload.expectedSalary,
      // citizenID: action.playload.citizenID,
      // };

      // case "UPDATE":
      // return state.map((post) => {
      //   if (post.id === action.id) {
      // return {
      //   ...post,
      //   title: action.data.newTitle,
      //   message: action.data.newMessage,
      //   editing: !post.editing,
      // };
      //   } else return post;
      // });

      localStorage.setItem("user", JSON.stringify(newState1));
      return newState1;

    default:
      break;
  }
};

export default userReducer;
