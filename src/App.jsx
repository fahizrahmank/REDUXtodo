import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}
