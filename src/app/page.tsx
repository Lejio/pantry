import Navbar from "./components/Navbar";
import PantryContainer from "./components/PantryContainer";
export default function Home() {

  return (
    <main>
      <div className=" flex flex-col px-5 py-5 items-center h-[100vh]">
        <Navbar />
        <h1 className=" text-center">Pantry Planner</h1>
        <PantryContainer />
      </div>
    </main>
  );
}
