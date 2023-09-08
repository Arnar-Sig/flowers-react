"use client";

import { useEffect, useState } from "react";
import SidenavItem from "./SidenavItem";

export default function Sidenav(props: any) {
  const types = [...new Set(props.flowerData.map((item) => item.type))];
  const encounteredFlowerTypes = new Set<String>();

  // Displays the first menu and sets the selected flower type
  function handleMouseEnterOverFirstMenu(e: any) {
/*     console.log("flowertypeselected: " + props.flowerTypeSelected);
    console.log("firstmenuopen: " + props.firstMenuOpen);
    console.log("e.target: " + e.target);
    console.log("e.currenttarget: " + e.currentTarget);
 */
    if (e.target === e.currentTarget) {
      props.setFirstMenuOpen(true);
      props.setFlowerTypeSelected(e.target.id);
    } else {
      props.setFirstMenuOpen(false);
      props.setFlowerTypeSelected("");
    }
  }

  function handleMouseLeaveOverFirstMenu(e: any) {
    if (e.target === e.currentTarget) {
      props.setFirstMenuOpen(true);
      props.setFlowerTypeSelected(e.target.id);
    }
    props.setFirstMenuOpen(false);
    props.setFlowerTypeSelected("");
  }

  return (
    <div className="container w-1/5 cursor-pointer">
      {types.map((item: any) => (
        <div
          key={item}
          id={item}
          className="h-8 border rounded border-solid border-black text-center  relative"
          onMouseEnter={handleMouseEnterOverFirstMenu}
          onMouseLeave={handleMouseLeaveOverFirstMenu}
        >
          {item}
          <SidenavItem
            type={item}
            flowerData={props.flowerData}
            flowerTypeSelected={props.flowerTypeSelected}
            setFlowerTypeSelected={props.setFlowerTypeSelected}
            firstMenuOpen={props.firstMenuOpen}
          />
        </div>
      ))}
      
    </div>
  );

  /*   Pretty close
  return (
    <div className="container w-1/5 cursor-pointer">
      {types.map((item: any) => (
        <div
          key={item}
          id={item}
          className="h-8 border rounded border-solid border-black text-center  relative"
          onMouseEnter={handleMouseEnterOverFirstMenu}
          onMouseLeave={handleMouseLeaveOverFirstMenu}
        >
          {item}
          {props.firstMenuOpen && (
          props.flowerData.filter((item) => item.type === props.flowerTypeSelected)
          .map((item, index) => (
          
            <div key={index} className="absolute h-8 w-max left-full px-2 border rounded border-solid border-black top-0">
              {item.name}
            </div>
          )
          ))}
          
        </div>
      ))}
    </div>
  );

 */

  /* The closest one 
  
  return (
    <div className="container w-1/5 cursor-pointer">
      {props.flowerData.map((item: any) => (
        <div
          key={item.id}
          id={item.type}
          className="h-8 border rounded border-solid border-black text-center  relative"
          onMouseEnter={handleMouseEnterOverFirstMenu}
          onMouseLeave={handleMouseLeaveOverFirstMenu}
        >
          {item.type}
          {props.firstMenuOpen && props.flowerTypeSelected === item.type && (
            <>
              <div className="absolute h-8 w-max left-full px-2 border rounded border-solid border-black top-0">
                {item.name}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
 */

  /*  Gamalt, Ekki rétt
  return (
    <div className="container w-1/5 cursor-pointer">
      {props.flowerData.map((item, index) => {
        if (!encounteredFlowerTypes.has(item.type)) {
          // If the type is not encountered before, render the element
          encounteredFlowerTypes.add(item.type); // Add the type to encounteredTypes
          return (
            <div
            key={item.id}
            id={item.type}
            className="h-8 border rounded border-solid border-black text-center  relative"
            onMouseEnter={handleMouseEnterOverFirstMenu}
            onMouseLeave={handleMouseLeaveOverFirstMenu}
          >
            {item.type}
            {props.firstMenuOpen && props.flowerTypeSelected === item.type && (
              <>
                <div className="absolute h-8 w-max left-full px-2 border rounded border-solid border-black top-0">
                  {item.name}
                </div>
              </>
            )}
          </div>
          );
        }
        return null; // If the type is encountered before, skip rendering
      })}
    </div>
  );
 */
}
