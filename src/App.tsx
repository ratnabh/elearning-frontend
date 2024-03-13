import { useSelector } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import NotiFicationBanner from "components/Notification/index.tsx";
import AuthHeader from "components/Headers/AuthHeader";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NotiFicationBanner text="this is a notification banner" />
      <AuthHeader />
      <Outlet />
    </div>
  );
}

export default App;
