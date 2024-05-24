import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseRef from "./Components/abc/useRef/useRef";
import UseContext from "./Components/abc/useContext/useContext";
import UseCallBack from "./Components/abc/useCallBack/useCallBack";
import UseMemo from "./Components/abc/useMemo/useMemo";
import Debouncing from "./Components/abc/debouncing/debouncing";
import ClassComponents from "./Components/abc/classComponents/classComponents";
import LifeCycleMethodFC from "./Components/abc/lifeCycleMethodFC/lifeCycleMethodFC";
import StateLifting from "./Components/abc/stateLifting/stateLifting";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseRef/>}/>
        <Route path="/usecontext" element={<UseContext/>}/>
        <Route path="/usecallback" element={<UseCallBack/>}/>
        <Route path="/usememo" element={<UseMemo/>}/>
        <Route path="/debouncing" element={<Debouncing/>}/>
        <Route path="/classcomponents" element={<ClassComponents/>}/>
        <Route path="/lifecyclemethodfc" element={<LifeCycleMethodFC/>}/>
        <Route path="/statelifting" element={<StateLifting/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
