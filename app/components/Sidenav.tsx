"use client";

import SidenavItem from "./SidenavItem";

export default function Sidenav(props: any) {
  const types = [...new Set(props.flowerData.map((item: any) => item.type))];
  const encounteredFlowerTypes = new Set<String>();

  // Displays the first menu and sets the selected flower type
  function handleMouseEnterOverFirstMenu(e: any) {
    if (e.target === e.currentTarget) {
      props.setFirstMenuOpen(true);
      props.setFlowerTypeSelected(e.target.id);
    } else {
      props.setFirstMenuOpen(false);
      props.setFlowerTypeSelected("");
    }
  }

  function handleMouseLeaveOverFirstMenu(e: any) {
    if (e.target === e.target) {
      props.setFirstMenuOpen(true);
      props.setFlowerTypeSelected(e.target.id);
    }
    props.setFirstMenuOpen(false);
    props.setFlowerTypeSelected("");
  }

  function handleFlowerTypeClicked(e: any) {
    
    props.setFlowerTypeClicked(e.target.id);
    //props.setFlowerNameClicked("");
    
  }

  if(!props.flowerData) {
    <div>Loading...</div>
  }
  else {
    return (
      <div className="container w-72  gap-9">
        <h2 className="text-center font-bold pb-1">Plöntutegundir</h2>
        {types.map((item: any, index: number) => (
          <div
            key={index}
            id={item}
            className="h-8 border  border-x-0 border-solid  relative cursor-pointer text-center hover:bg-slate-100"
   /*          className="flex items-center w-full h-10 px-3 mt-1 bg-gray-300 rounded cursor-pointer relative" */
            onMouseEnter={handleMouseEnterOverFirstMenu}
            onMouseLeave={handleMouseLeaveOverFirstMenu}
            onClick={handleFlowerTypeClicked}
          >
            {item}
            <SidenavItem
              type={item}
              flowerData={props.flowerData}
              flowerTypeSelected={props.flowerTypeSelected}
              setFlowerTypeSelected={props.setFlowerTypeSelected}
              firstMenuOpen={props.firstMenuOpen}
              setFlowerNameClicked={props.setFlowerNameClicked}
              setFLowerTypeClicked={props.setFlowerTypeClicked}
              flowerNameClicked={props.flowerNameClicked}
            />
          </div>
        ))}
        
      </div>
    );
  
  }
  
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
