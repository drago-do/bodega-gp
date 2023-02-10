import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Layout from "./Layout";
import NoPage from "./NoPage";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Bodega from "./pages/Bodega";
import Add from "./pages/Add";
import Info from "./pages/Info";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="bodega" element={<Bodega />} />
          <Route path="add" element={<Add />} />
          <Route path="info" element={<Info />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
