import Content from "./components/Content";

import Navbar from "./components/Navbar";

export default async function Home() {
  return (
    <>
      <div className="flex justify-between gap-5 mt-10 ">
        <div className="w-1/5 text-center pt-5 ">Furuhvammur 2</div>
        <Navbar />
      </div>
      <Content />
    </>
  );
}

