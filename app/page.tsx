import CardContainer from "./components/CardContainer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>  
      <div className="flex justify-between gap-5 mt-10 ">
        <div className="w-1/5 text-center  pt-5 outline outline-black" >Furuhvammur 2</div>
        <Navbar />
      </div>
      <div className="mx-auto flex justify-between gap-5 pt-6 mt-10">
        <Menu />
        <CardContainer />
      </div>
    </>
  );
}
