import React, { useState } from "react";
import "./styles.css";
import {
  creatingJson,
  viewingJson,
  scalingJson,
  deletingJson,
  managementJson,
} from "./data";

type Category = "Creating" | "Viewing" | "Scaling" | "Deleting" | "Management";
type Command = {
  id: string;
  command: string;
  description: string;
};

const commandJsons: { [key in Category]: Command[] } = {
  Creating: creatingJson,
  Viewing: viewingJson,
  Scaling: scalingJson,
  Deleting: deletingJson,
  Management: managementJson,
};

export default function App() {
  const [inputJSON, setInputJSON] = useState<Command[]>(viewingJson);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onClickEventHandler = (category: Category) => {
    setInputJSON(commandJsons[category]);
    setSearchQuery(""); // Reset search query when category changes
  };

  const filterCommands = (commands: Command[]) => {
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
        <p>Select a category or use the search bar to find Kubernetes commands.</p>
        <input
          type="text"
          placeholder="Search commands..."
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </header>
      <nav>
        {(Object.keys(commandJsons) as Category[]).map(
          (category) => (
            <button
              key={category}
              onClick={() => onClickEventHandler(category)}
              className={`nav-button ${inputJSON === commandJsons[category] ? 'active' : ''}`}
            >
              {category}
            </button>
          ),
        )}
      </nav>
      <main>
        <div className="commands-container">
          {filterCommands(inputJSON).map((item: Command) => (
            <div key={item.id} className="card">
              <div className="terminal-header">
                <div className="window-controls">
                  <span className="window-control close"></span>
                  <span className="window-control minimize"></span>
                  <span className="window-control expand"></span>
                </div>
              </div>
              <div className="description">
                <p>{item.description}</p>
              </div>
              <div className="command-content">
                <pre><code>{item.command}</code></pre>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>2024 All Rights Reserved - Created by Adil Shahzad</p>
      </footer>
    </div>
  );
}
