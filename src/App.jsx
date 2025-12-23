<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import WhyHope3 from './pages/whyHope3.jsx'
import Donate from './pages/Donate.jsx'
=======
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
>>>>>>> 6339f05410117a6cc338b1bb654fb61e6ef0b507

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-hope3" element={<WhyHope3 />} />
<<<<<<< HEAD
        <Route path="/donate" element={<Donate />} />
=======
        <Route path="/hope3-journey" element={<Hope3Journey />} />
>>>>>>> 6339f05410117a6cc338b1bb654fb61e6ef0b507
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default App

=======
export default App;
>>>>>>> 6339f05410117a6cc338b1bb654fb61e6ef0b507
