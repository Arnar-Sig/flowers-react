
export default function Navbar() {
  return (
    <nav className="mx-auto flex border border-x-0 max-w-7xl items-center justify-evenly p-6 mt-10">
      <a href="/"> Heim</a>
      <div id="plant-selector-menu">Plöntur</div>
      <a href="/">Staðsetning</a>
      <a href="/">Upplýsingar</a>
    </nav>
  );
}
