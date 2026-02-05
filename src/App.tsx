import { Route, Routes } from "react-router-dom";
import Main_ptBR from "./pages/main_ptBR";
import Main_enUS from "./pages/main_enUS";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main_ptBR />} />
        <Route path="/pt" element={<Main_ptBR />} />
        <Route path="/en" element={<Main_enUS />} />
      </Routes>
    </>
  );
}

export default App;
