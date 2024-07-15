import "./assets/css/main.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import NavRouter from "./routers/NavRouter";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/main/Home";

const App: React.FC = () => {

  return (
    <Router>
      <div id="container">
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      <NavRouter/>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
