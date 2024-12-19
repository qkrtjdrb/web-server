import react from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Concerts from "./pages/Concerts";
import Reservation from "./pages/Reservation";
import {
  Routes,
  Route,
  Router,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Concerts" element={<Concerts />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;