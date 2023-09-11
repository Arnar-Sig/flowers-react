"use client";

import Card from "./Card";
import Sidenav from "./Sidenav";
import { useEffect, useState } from "react";

export default function Content() {
  const [firstMenuOpen, setFirstMenuOpen] = useState(false);
  const [flowerTypeSelected, setFlowerTypeSelected] = useState(""); // Hovered over in menu
  const [flowerData, setFlowerData] = useState([{}]);
  const [flowerTypeClicked, setFlowerTypeClicked] = useState();
  const [flowerNameClicked, setFlowerNameClicked] = useState();



  // Getting data from database and creating both flowerdata and the flowerdata using a set
  useEffect(() => {
    fetch("/api/search-flowers-table")
      .then((res) => res.json())
      .then((data) => {
        setFlowerData(data.result.rows);
      });
  }, []);

  return (
    <>
      <div id="SidenavAndCardContainer" className="mx-auto flex flex-row justify-between gap-5 pt-6 mt-10">
        <Sidenav
          firstMenuOpen={firstMenuOpen}
          setFirstMenuOpen={setFirstMenuOpen}
          flowerTypeSelected={flowerTypeSelected}
          setFlowerTypeSelected={setFlowerTypeSelected}
          flowerData={flowerData}
          setFlowerData={setFlowerData}
          setFlowerTypeClicked={setFlowerTypeClicked}
          flowerNameClicked={flowerNameClicked}
          setFlowerNameClicked={setFlowerNameClicked}
        />
      
      <Card 
        flowerData={flowerData}
        flowerTypeSelected={flowerTypeSelected}
        flowerTypeClicked={flowerTypeClicked}
        flowerNameClicked={flowerNameClicked}
        />
      </div> 
    </>
  );

  
}
