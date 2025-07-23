import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { FloatingLinks } from "./components/FloatingLinks/FloatingLinks";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app__outer-container">
      <Header />
      <div className="app__flex-container">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="app__main-content">{useRoutes(routes)}</main>
      </div>
      <FloatingLinks />
    </div>
  );
}

export default App;
