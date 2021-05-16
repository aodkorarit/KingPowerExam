import React, { useState } from "react";
import "./App.css";
import InputFrom from "./Components/InputFrom";
import ShowUser from "./Components/showUser";

function App() {
  const [user, setuser] = useState();
  const handleEditUser = (userEdit) => {
    setuser(userEdit);
  };

  return (
    <div className="App">
      <InputFrom userEdit={user} />
      <ShowUser editUser={handleEditUser} />
    </div>
  );
}

export default App;
