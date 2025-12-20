// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import WhyHope3 from './pages/WhyHope3.jsx'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/why-hope3" element={<WhyHope3 />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App


// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WhyHope3 from "./pages/WhyHope3.jsx";
import Hope3Journey from "./pages/Hope3Journey.jsx";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-hope3" element={<WhyHope3 />} />
        <Route path="/hope3-journey" element={<Hope3Journey />} />
      </Routes>
    </Router>
  );
}

export default App;
