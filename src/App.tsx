import React from "react";
import { Header } from "./Components/Header/Header";
import "./styles/global.css";
import { Tasks } from "./Components/Tasks/Tasks";
import { TasksProvider } from "./context/TaskContext";

function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />
    </TasksProvider>
  );
}

export default App;
