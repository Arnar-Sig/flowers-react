export default function Card(props: any) {
  /*   console.log("props.FlowerTypeSel: " + props.flowerTypeClicked);
  console.log("props.FlowerNameSel: " + props.flowerNameClicked);
 */
  // Populate page with random images
  if (!props.flowerTypeClicked && !props.flowerNameClicked) {
    return (
      <div className="container flex flex-col">
        <h1 className="text-4xl mb-4">Myndir af handahófi</h1>
        <div className="container flex flex-row flex-wrap  gap-6">
          {props.flowerData.map((item: any, index: number) => (
            <a key={index} className="h-96 w-80 flex flex-col ">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={`/images/${item.filename}`}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }

  // Populate page with the images of the type in flowerTypeClicked
  else if (props.flowerTypeClicked) {
    return (
      <div className="container flex flex-col">
      <h1 className="text-4xl mb-4">Myndir af tegundinni {props.flowerTypeClicked}</h1>
      <div className="container flex flex-row flex-wrap gap-6">
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
      </div>
    );


    
  } else if (props.flowerNameClicked) {
    console.log(props.flowerNameClicked);
    return (
      <div className="container flex flex-col">
      <h1 className="text-4xl mb-4">Myndir af plöntunni {props.flowerNameClicked}</h1>
      <div className="container flex flex-row flex-wrap  w-4/5 gap-6">
      {props.flowerData.filter((flower: any) => flower.name === props.flowerNameClicked).map((item: any, index: any) => (
        <a key={index} className="h-96 w-80 flex flex-col ">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={`/images/${item.filename}`}
          />
      </a>
      ))
      
  
      }
      </div>
      </div>
    )
    
  }
}
