import Screens from "./components/Screens";
import TiktokLogo from "./assets/Tiktok_Logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <img
          src={TiktokLogo}
          style={{ height: 60, width: 100, margin: "auto" }}
        />
      </div>

      <div>
        <Screens />
      </div>
    </>
  );
}

export default App;
