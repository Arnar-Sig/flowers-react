/* export default async function CardContainer() {
  async function getData() {
    const res = await fetch("/api/search-flowers-table");

    if (!res.ok) {
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
 */