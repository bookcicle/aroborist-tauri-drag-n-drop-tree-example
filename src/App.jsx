import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import {Tree} from "react-arborist";

const data = [
    { id: "1", name: "Unread" },
    { id: "2", name: "Threads" },
    {
        id: "3",
        name: "Chat Rooms",
        children: [
            { id: "c1", name: "General" },
            { id: "c2", name: "Random" },
            { id: "c3", name: "Open Source Projects" },
        ],
    },
    {
        id: "4",
        name: "Direct Messages",
        children: [
            { id: "d1", name: "Alice" },
            { id: "d2", name: "Bob" },
            { id: "d3", name: "Charlie" },
        ],
    },
];

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <Tree initialData={data} />;
    </main>
  );
}

export default App;
