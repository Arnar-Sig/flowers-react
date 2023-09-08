import Content from "./components/Content";

import Navbar from "./components/Navbar";

/* 
async function getData() {
  const res = await fetch('http://localhost:3000/api/search-flowers-table')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 */
export default async function Home() {


  return (
    <>
      <div className="flex justify-between gap-5 mt-10 ">
        <div className="w-1/5 text-center pt-5 outline outline-gray-400 outline-1 ">Furuhvammur 2</div>
        <Navbar />
      </div>
      <Content  />
    </>
  );
}

