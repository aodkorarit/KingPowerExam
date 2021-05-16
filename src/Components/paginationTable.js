import React, { useEffect, useState } from "react";

import Pagination from "@material-ui/lab/Pagination";
export default function PaginationTable({
  newuser,
  handlesetminpage,
  handlesetmaxpage,
}) {
  const [page, setpage] = useState(0);
  const [current, setcurrent] = useState(1);
  useEffect(() => {
    let sum = 0;
    sum = parseInt(newuser?.length / 5);
    if (newuser?.length % 5 !== 0) {
      sum += 1;
    }
    setpage(sum);
  }, [newuser]);

  const handleChange = (event, value) => {
    setcurrent(value);
    handlesetminpage(value * 5 - 5);
    handlesetmaxpage(value * 5);
  };

  return (
    <div>
      <Pagination count={page} page={current} onChange={handleChange} />
    </div>
  );
}
