"use client";


export default function Sidenav(props: any) {
  /*   
  console.log("first menu open: " + props.firstMenuOpen);
  console.log("flower type selected: " + props.flowerTypeSelected);
 */

  // Displays the first menu and sets the selected flower type
  function handleMouseOverFirstMenu(e: any) {
    if (e.target === e.currentTarget) {
      props.setFirstMenuOpen(!props.firstMenuOpen);
      if (props.firstMenuOpen) {
        props.setFlowerTypeSelected("");
      } else {
        props.setFlowerTypeSelected(e.target.id);
      }
    } else {
      props.setFirstMenuOpen(false);
      props.setFlowerTypeSelected("");
    }
  }


/*   console.log("flower data: " + props.flowerData[0].name); */

  return (
    <div className="container w-1/5 cursor-pointer">
      {props.flowerData.map((item: any) => (
        <div key={item.type} id={item.type}
        className="h-8 border rounded border-solid border-black text-center  relative"
        onMouseEnter={handleMouseOverFirstMenu}
        onMouseLeave={handleMouseOverFirstMenu}
        >
          {item.type}
        {props.firstMenuOpen && props.flowerTypeSelected === item.type && (
          <div className="absolute h-8 w-max left-full px-2 border rounded border-solid border-black top-0">
            {item.name}
          </div>
        )}
        
        </div>
      ))}

{/*       
      <div
        id="Magnolia"
        className="h-8 outline outline-1 text-center  relative"
        onMouseEnter={handleMouseOverFirstMenu}
        onMouseLeave={handleMouseOverFirstMenu}
      >
        Magnolia
        {props.firstMenuOpen && props.flowerTypeSelected === "Magnolia" && (
          <div className="absolute h-8 left-full px-2 outline outline-1 top-0">
            teqwerqwerqwst
          </div>
        )}
      </div>
 */}

{/* 
      <div className=" border border-black text-center">test</div>
      <div className=" border border-black text-center">test</div>
      <div className=" border border-black text-center">test</div>
      <div className=" border border-black text-center">test</div>
      <div className=" border border-black text-center">test</div>
      <div className=" border border-black text-center">test</div>
      <div className=" border border-black text-center">test</div>
      <div className=" border border-black text-center">test</div>
      <div className=" border border-black text-center ">test</div>
 */}

    </div>
  );
}
