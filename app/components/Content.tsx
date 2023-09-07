"use client";

import Sidenav from "./Sidenav";
import { useState } from "react";

export default function Content() {
  const [firstMenuOpen, setFirstMenuOpen] = useState(false);
  const [flowerTypeSelected, setFlowerTypeSelected] = useState("");

  return (
    <div className="mx-auto  flex justify-between gap-5 pt-6 mt-10">
      <Sidenav
        firstMenuOpen={firstMenuOpen}
        setFirstMenuOpen={setFirstMenuOpen}
        flowerTypeSelected={flowerTypeSelected}
        setFlowerTypeSelected={setFlowerTypeSelected}
      />
      
    </div>
  );
}
