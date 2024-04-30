import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProtShow from "./ProtShwo";
import Project01 from "./Project01";
import Project02 from "./Project02";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProtShow" element={<ProtShow />} />
        <Route path="/Project01" element={<Project01 />} />
        <Route path="/Project02" element={<Project02 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
