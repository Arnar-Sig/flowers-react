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
      <div className="container absolute left-full top-0 ">
        {props.flowerData
          .filter((flower: any) => flower.type === props.type)
          .map((item: any, index: any) => (
            
            <a id={item.name} key={index} onClick={handleFlowerNameClicked}>
              <div className="border rounded border-black h-8 bg-white cursor-pointer" >
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
