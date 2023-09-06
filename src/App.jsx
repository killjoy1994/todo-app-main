import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import moonLogo from "./assets/images/icon-moon.svg";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import TodosFilter from "./components/TodosFilter";
import Footer from "./components/Footer";
import { twMerge } from "tailwind-merge";

export const ThemeContext = React.createContext();
const loadedTodos = JSON.parse(localStorage.getItem("todos"));

function App() {
  const [todos, setTodos] = useState(loadedTodos || []);
  const [activeState, setActiveState] = useState("all");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });
  };

  // useEffect(() => {
  //   const loadedTodos = JSON.parse(localStorage.getItem("todos"));
  //   if (loadedTodos) {
  //     setTodos(loadedTodos)
  //   }
  // }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={twMerge("min-h-screen", theme !== "light" ? "dark dark-bg" : "")}>
        <div className="w-full h-[30vh] bg-mobile-bg-light dark:bg-mobile-bg-dark xs:bg-desktop-bg-light dark:xs:bg-desktop-bg-dark bg-no-repeat bg-cover bg-top"></div>
        <div className="mx-auto max-w-[600px] relative top-[-150px] px-6 h-[700px]">
          <Header />
          <TextInput setTodos={setTodos} activeState={activeState} />
          <TodoList todos={todos} setTodos={setTodos} activeState={activeState} />
          <TodosFilter todos={todos} setTodos={setTodos} activeState={activeState} setActiveState={setActiveState} />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
