import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Gallery, Home, Youths } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/youth" element={<Youths />} />
      </Routes>
    </Router>
  );
}

export default App;