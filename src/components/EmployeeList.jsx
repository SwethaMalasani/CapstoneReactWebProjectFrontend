import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EmployeeList.css';

export const EmployeeList = ({ employees, deleteEmployee, updateEmployee }) => {
    const navigate = useNavigate(); 
  
    const handleUpdate = (id) => {
      navigate(`/update-employee/${id}`);
    };
  
    useEffect(() => {
      console.log(employees); // Debugging to check the employees list after deletion
    }, [employees]);
  
    return (
      <div className="employee-list-container">
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Location</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((employee) => (
        <tr key={employee.employeeId}>
          <td>{employee.employeeId}</td>
          <td>{employee.employeeName}</td>
          <td>{employee.location}</td>
          <td>{employee.department}</td>
          <td>${employee.salary}</td>
          <td>
            <button onClick={() => deleteEmployee(employee.employeeId)}>Delete</button>
            <button onClick={() => handleUpdate(employee.employeeId)}>Update</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    );
};
