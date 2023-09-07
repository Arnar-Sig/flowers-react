
export default async function CardContainer() {
  async function getData() {
    const res = await fetch("http://localhost:3000/api/search-flowers-table");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const data = await getData();
  let dataAsArray = data.result.rows;

  return (

    <div className="container outline outline-1 outline-black h-96">
      {dataAsArray.map((item: any) => (
        <div>{item.name}</div>
      ))}
      </div>

  );
}
