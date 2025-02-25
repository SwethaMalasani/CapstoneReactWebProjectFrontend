// Inside UpdateEmployeeForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate for redirect after update
import '../styles/UpdateEmployeeForm.css';

const UpdateEmployeeForm = () => {
  const { employeeId } = useParams(); // Get the employeeId from URL parameters
  const navigate = useNavigate(); // Initialize the navigate function
  const [employee, setEmployee] = useState({
    employeeName: '',
    location: '',
    department: '',
    salary: '',
  });

  // Fetch the current employee data
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/employeesystem/${employeeId}`);
        setEmployee(response.data); // Set the fetched employee data
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };

    fetchEmployee();
  }, [employeeId]);

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // Handle form submission (update employee)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = {
        employeeName: employee.employeeName,
        location: employee.location,
        department: employee.department,
        salary: employee.salary,
      };

      // Send the PUT request to update the employee
      const response = await axios.put(`http://localhost:3000/api/employeesystem/${employeeId}`, updatedData);

      // On success, redirect to the employee list page
      alert('Employee updated successfully!');
      navigate('/employees'); // You can change the redirect route as needed
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Failed to update employee.');
    }
  };

  // Render the update form
  return (
    <div className="update-employee-container">
      <form onSubmit={handleSubmit}>
        <h3>Update Employee</h3>
        <div>
          <label>Employee Name:</label>
          <input
            type="text"
            name="employeeName"
            value={employee.employeeName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={employee.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default UpdateEmployeeForm;
