"use client";

import Sidenav from "./Sidenav";
import { useEffect, useState } from "react";

export default function Content() {
  const [firstMenuOpen, setFirstMenuOpen] = useState(false);
  const [flowerTypeSelected, setFlowerTypeSelected] = useState("");
  const [flowerData, setFlowerData] = useState([{}]);

  let newSet = new Set();
  newSet.add("Green Diamond");
  let newObj = { Magnolia: newSet };
  const [flowerDataUsingSet, setflowerDataUsingSet] = useState(newObj);

  // Getting data from database and creating both flowerdata and the flowerdata using a set
  useEffect(() => {
    fetch("http://localhost:3000/api/search-flowers-table")
      .then((res) => res.json())
      .then((data) => {
        setFlowerData(data.result.rows);
      });
  }, []);

  return (
/*     <Test data={flowerData} /> */
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
