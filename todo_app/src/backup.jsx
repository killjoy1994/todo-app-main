import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [todo, setTodo] = useState("");
  return (
    <div className="min-h-screen sm:mx-auto relative px-5 pt-12">
      {/* Image Background */}
      <div className="absolute -z-50 left-0 top-0 w-full h-[30vh] xl:h-[30vh] bg-mobile-bg-light xs:bg-desktop-bg-light bg-no-repeat bg-cover bg-[position:center_top]"></div>
      <div className="max-w-[600px] mx-auto">
        <Header />
        {/* TODO LIST */}
        <div className="mt-12 h-12 flex items-center bg-white px-6 rounded relative">
          <span className="inline-block border border-slate-400 h-6 w-6 rounded-full "></span>
          <input type="text" className="h-full ml-4 outline-none" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Create a new todo..." />
        </div>
        {/* TODO Item */}
      </div>
    </div>
  );
}

export default App;
