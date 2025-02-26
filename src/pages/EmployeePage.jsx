import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { EmployeeList } from '../components/EmployeeList'; // Import EmployeeList
import EmployeeForm from '../components/EmployeeForm'; // Import EmployeeForm

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // For the search query

  const navigate = useNavigate(); // Hook for navigation

  // Fetch employees
  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/employeesystem');
      setEmployees(response.data);
      console.log("Employees has been fetched");
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  // Add new employee function
  const addEmployee = async (newEmployee) => {
    try {
      const response = await axios.post('http://localhost:3000/api/employeesystem', newEmployee);
      setEmployees([...employees, response.data]);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  // Delete employee function
  const deleteEmployee = async (employeeId) => {
    try {
      await axios.delete(`http://localhost:3000/api/employeesystem/${employeeId}`);
      setEmployees(employees.filter((employee) => employee.employeeId !== employeeId));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  // Update employee function
  const updateEmployee = async (employeeId, updatedData) => {
    try {
      await axios.put(`http://localhost:3000/api/employeesystem/${employeeId}`, updatedData);
      setEmployees(employees.map((employee) =>
        employee.employeeId === employeeId ? { ...employee, ...updatedData } : employee
      )
     
    );
    } catch (error) {
      console.error('Error updating employee:', error);
    }

  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter employees based on the search term
  const filteredEmployees = employees.filter((employee) =>
    employee.employeeId.toString().includes(searchTerm) || // ✅ Search by ID
    employee.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="employee">
      <h2>Employee Management CRUD operations</h2>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search employees by name, department, or location"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <button>Search</button>

        {/* Navigate to /addemployee when clicked */}
        <button onClick={() => navigate('/addemployee')} className="add-employee-btn">
          Create Employee
        </button>
      </div>
     <div classname="EmployeeList">
      {/* Display Employee List, filtered by search term */}
      <EmployeeList
        employees={filteredEmployees}
        deleteEmployee={deleteEmployee}
        updateEmployee={updateEmployee}
      />
      </div>
    </div>
  );
};

export default EmployeePage;
