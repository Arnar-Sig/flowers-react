export default function Card(props: any) {




/*   console.log(props.type); */


  // Populate page with random images
  if (!props.flowerTypeClicked) {
    return (
      <div className="container flex flex-row flex-wrap  w-4/5 gap-6">
        {props.flowerData.map((item: any, index: number) => (
          <a key={index} className="h-96 w-80 flex flex-col ">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={`/images/${item.filename}`}
            />
          </a>
        ))}
      </div>
    );
  }

  // Populate page with the images of the type in flowerTypeClicked
  else if (props.flowerTypeClicked) {
    return(
      <div className="container flex flex-row flex-wrap  w-4/5 gap-6">
        {props.flowerData
              .filter((flower: any) => flower.type === props.flowerTypeClicked)
              .map((item: any, index: any) => (
                <a key={index} className="h-96 w-80 flex flex-col ">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={`/images/${item.filename}`}
                />
              </a>
              ))}
    </div>
    )
  }

}

/* 
    {props.flowerData
          .filter((flower: any) => flower.type === props.type)
          .map((item: any, index: any) => (
            <a key={index} onClick={flowerClick}>
              <div className="border rounded border-black h-8 bg-white" >
                {item.name}
              </div>
            </a>
          ))}
*/