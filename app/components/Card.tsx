export default function Card(props: any) {
  return (
    <div className="container flex flex-row justify-evenly w-4/5">
      {props.flowerData.map((item: any, index: number) => (
        <a key={index} className="h-72 w-72 flex flex-col gap-2">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={`/images/${item.filename}`}

          ></img>
        </a>
      ))}
    </div>
  );
}
