import './App.css';
import EnterForms from './components/enterForms/enterForms';
import AdminPage from './components/adminPage/adminPage';
import {BrowserRouter, Routes ,Route } from "react-router-dom";
import { AdminUserContextProvider } from './context/apiContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AdminUserContextProvider>
        <Routes>
            <Route path="/" element={<EnterForms/>}/>
            <Route path="/Admin" element={<AdminPage/>}/>
          </Routes>
      </AdminUserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
