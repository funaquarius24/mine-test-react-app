import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
// import your route components too
// import AddTutorial from "./components/AddTutorial";
// import Tutorial from "./components/Tutorial";
// import TutorialsList from "./components/TutorialsList";
import LoginPage from './LoginPage';
import Header from "../_components/Header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}
export default App;