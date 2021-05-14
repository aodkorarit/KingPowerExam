import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

function ShowUser({ newuser }) {
  const dispatch = useDispatch();
  const [user, setuser] = useState([])
  useEffect(() => {
    // let initialState = localStorage.getItem('user')

    let initialState = dispatch({ type: "GET_USER" })
    console.log(initialState);
  }, [])

  return <div>
    {console.log(newuser)}
  </div>;
}

const mapStateToProps = (state) => {
  return {
    newuser: state
  }
}

export default connect(mapStateToProps)(ShowUser)