import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import moonLogo from "./assets/images/icon-moon.svg";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import TodosFilter from "./components/TodosFilter";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [activeState, setActiveState] = useState("all")

  console.log("todos: ", todos)
  return (
    <div className="min-h-screen ">
      <div className="w-full h-[30vh] bg-mobile-bg-light xs:bg-desktop-bg-light bg-no-repeat bg-cover bg-top"></div>
      <div className="mx-auto max-w-[600px] relative top-[-150px] px-6 h-[700px]">
        <Header />
        <TextInput setTodos={setTodos} activeState={activeState} 
        />
        <TodoList 
          todos={todos}
          setTodos={setTodos}
          activeState={activeState}
        />
        <TodosFilter 
          todos={todos}
          setTodos={setTodos} 
          activeState={activeState}
          setActiveState={setActiveState}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
