
import Content from "./components/Content";

import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>  
      <div className="flex justify-between gap-5 mt-10 ">
        <div className="w-1/5 text-center  pt-5 outline outline-1 outline-black" >Furuhvammur 2</div>
        <Navbar />
      </div>
      <Content/>
    </>
  );
}
