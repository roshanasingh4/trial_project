import LandingPage from "./screens/LandingPage";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login/Login";
import Payment from "./screens/Payment/Payment";
import Success from "./screens/Success/Success";
import Paypal from "./screens/Success/Paypal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/_success" element={<Paypal />} />
      </Routes>
    </div>
  );
}

export default App;
