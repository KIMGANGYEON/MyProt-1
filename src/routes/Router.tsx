import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProtShow from "./ProtShwo";
import Project01 from "./Project01";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProtShow" element={<ProtShow />} />
        <Route path="/Project01" element={<Project01 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
