"use client";

import Sidenav from "./Sidenav";
import { useEffect, useState } from "react";

export default  function Content() {
  const [firstMenuOpen, setFirstMenuOpen] = useState(false);
  const [flowerTypeSelected, setFlowerTypeSelected] = useState("");
  const [flowerData, setFlowerData] = useState([{}]);


  useEffect(() => {
    fetch("http://localhost:3000/api/search-flowers-table")
      .then((res) => res.json())
      .then((data) => {
        setFlowerData(data.result.rows);
      })
  }, []);

  return (
    <div className="mx-auto flex justify-between gap-5 pt-6 mt-10">
      <Sidenav
        firstMenuOpen={firstMenuOpen}
        setFirstMenuOpen={setFirstMenuOpen}
        flowerTypeSelected={flowerTypeSelected}
        setFlowerTypeSelected={setFlowerTypeSelected}
        flowerData={flowerData}
        setFlowerData={setFlowerData}
      />
    </div>
  );
}

