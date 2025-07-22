import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Header />
      <div className="app__flex-container">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="app__main-content">{useRoutes(routes)}</main>
      </div>
    </div>
  );
}

export default App;
