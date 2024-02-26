import { useState } from "react";
import { Header, SideMenu } from "./components";
import "./App.scss";

const App = () => {
  const [active, setActive] = useState(false);
  const handleToggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <main className="main-screen-container">
      <SideMenu active={active} />
      <div className={`select-tab-content ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive} />
      </div>
    </main>
  );
};

export default App;
