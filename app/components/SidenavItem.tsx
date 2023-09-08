export default function SidenavItem(props: any) {



  if (props.flowerTypeSelected === props.type && props.firstMenuOpen) {
    return (
      <div className="container absolute left-full top-0  ml-0.5">
        {props.flowerData
          .filter((flower: any) => flower.type === props.type)
          .map((item: any, index: any) => (
            <div className="border rounded border-black h-8" key={index}>
              {item.name}
            </div>
          ))}
        {/*         <div className="border rounded border-black h-8">{props.type} og first menu er opin!</div>
        <div className="border rounded border-black h-8">test2</div>
        <div className="border rounded border-black h-8">test3</div>
        <div className="border rounded border-black h-8">test4</div>
        <div className="border rounded border-black h-8">test5</div> */}
      </div>
    );
  } else {
    return null;
  }
}
