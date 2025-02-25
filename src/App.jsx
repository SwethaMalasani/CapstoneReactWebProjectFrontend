import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactUsPage from './pages/ContactUsPage';
import EmployeePage from './pages/EmployeePage';
import EmployeeForm from './components/EmployeeForm';
import UpdateEmployeeForm from './components/UpdateEmployeeForm';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer
import axios from 'axios';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const addEmployee = async (employee) => {
    try {
      const response = await axios.post('http://localhost:3000/api/employeesystem', employee);
      setEmployees([...employees, response.data]);
      setFilteredEmployees([...employees, response.data]);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className="Homescreen">
     
    <Router>
    <Header />  
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/addemployee" element={<EmployeeForm addEmployee={addEmployee} />} />
          <Route path="/update-employee/:employeeId" element={<UpdateEmployeeForm />} />
        </Routes>   
      </div>
     
    </Router>
    <Footer />
    </div>
    
  );
}

export default App;
