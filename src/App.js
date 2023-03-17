import './App.css';
import EnterForms from './components/enterForms/enterForms';
import AdminPage from './components/adminPage/adminPage';
import {BrowserRouter, Routes ,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnterForms/>}/>
          <Route path="/Admin" element={<AdminPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
