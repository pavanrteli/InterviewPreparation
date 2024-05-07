import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseRef from "./Components/abc/useRef/useRef";
import UseContext from "./Components/abc/useContext/useContext";
import UseCallBack from "./Components/abc/useCallBack/useCallBack";
import UseMemo from "./Components/abc/useMemo/useMemo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseRef/>}/>
        <Route path="/usecontext" element={<UseContext/>}/>
        <Route path="/usecallback" element={<UseCallBack/>}/>
        <Route path="/usememo" element={<UseMemo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
