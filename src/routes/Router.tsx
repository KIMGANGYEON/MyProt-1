import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProtShow from "./ProtShwo";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ProtShow" element={<ProtShow />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
