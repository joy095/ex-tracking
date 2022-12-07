import { Outlet } from "react-router-dom";
import ButtonAppBar from "./components/AppBar";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Outlet />
    </div>
  );
}

export default App;
