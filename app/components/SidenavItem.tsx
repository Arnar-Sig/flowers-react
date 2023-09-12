export default function SidenavItem(props: any) {

  function handleFlowerNameClicked(e: any) {
/*     console.log("currentTarget.text: " + e.currentTarget.text);
 */    props.setFlowerNameClicked(e.currentTarget.text);
/*     console.log("FlowerNameClicked: " + props.flowerNameClicked);
 */    /* props.setFLowerTypeClicked(""); */
/*     console.log("flowerNameclicked: " + props.flowerNameClicked);
    console.log("flowerTypeClicked: " + props.flowerTypeClicked); */
  }

  if (props.flowerTypeSelected === props.type && props.firstMenuOpen) {
    return (
      <div className="container absolute left-full top-0 z-10 ">

        {props.flowerData
          .filter((flower: any) => flower.type === props.type)
          .map((item: any, index: any) => (
            
            <a id={item.name} key={index} onClick={handleFlowerNameClicked}>
              <div 
               className="border  border-x-0 border-solid h-8 bg-white cursor-pointer text-center hover:bg-slate-100  " 
/*               className="flex items-center w-full h-10 px-3 mx-1  bg-gray-200 rounded cursor-pointer relative" */
              >
                {item.name}
              </div>
            </a>
            
          ))}
      </div>
    );
  } else {
    return null;
  }
}
