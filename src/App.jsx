// App.js
import React, { useState } from "react";
import "./styles.css";
import {
  creatingJson,
  viewingJson,
  scalingJson,
  deletingJson,
  managementJson,
} from "./data";

export default function App() {
  const [inputJSON, setInputJSON] = useState(viewingJson);
  const [searchQuery, setSearchQuery] = useState("");

  const onClickEventHandler = (category) => {
    switch (category) {
      case "Creating":
        setInputJSON(creatingJson);
        break;
      case "Viewing":
        setInputJSON(viewingJson);
        break;
      case "Scaling":
        setInputJSON(scalingJson);
        break;
      case "Deleting":
        setInputJSON(deletingJson);
        break;
      case "Management":
        setInputJSON(managementJson);
        break;
      default:
        setInputJSON(viewingJson);
    }
    setSearchQuery(""); // Reset search query when category changes
  };

  const copyToClipboard = (command) => {
    navigator.clipboard.writeText(command).then(
      () => {
        alert(`Copied to clipboard: ${command}`);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      },
    );
  };

  const filterCommands = (commands) => {
    if (!searchQuery) return commands;
    return commands.filter(
      (cmd) =>
        cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Interactive Kubernetes Cheat Sheet</h1>
        <p>
          Select a category or use the search bar to find Kubernetes commands.
        </p>
        <input
          type="text"
          placeholder="Search commands..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </header>
      <nav>
        {["Creating", "Viewing", "Scaling", "Deleting", "Management"].map(
          (category) => (
            <button
              key={category}
              onClick={() => onClickEventHandler(category)}
            >
              {category}
            </button>
          ),
        )}
      </nav>
      <section className="card-container">
        {filterCommands(inputJSON).map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => copyToClipboard(item.command)}
          >
            <pre>
              <code>{item.command}</code>
            </pre>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
      <footer>
        <p>2024 All Rights Reserved- Created by Adil Shahzad</p>
      </footer>
    </div>
  );
}
