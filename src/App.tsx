import "./assets/css/main.css";
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";
import NavRouter from "./routers/NavRouter";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/main/Home";
import AuthRouter from "./routers/AuthRouter";

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
