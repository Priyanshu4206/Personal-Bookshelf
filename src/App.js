import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="main-container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
