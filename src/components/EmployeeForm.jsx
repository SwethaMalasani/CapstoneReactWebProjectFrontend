import React, { useState } from 'react'; // ✅ Import useState properly
import { useNavigate } from 'react-router-dom';
import '../styles/EmployeeForm.css';

const EmployeeForm = ({ addEmployee }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (employeeId && employeeName && location && department && salary) {
      try {
        await addEmployee({
          employeeId,
          employeeName,
          location,
          department,
          salary,
        });

        alert('Employee added successfully!');
        navigate('/employees');
      } catch (error) {
        alert('Error adding employee. Please try again.');
      }
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="employee-form-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label>Employee ID:</label>
          <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Employee Name:</label>
          <input type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Department:</label>
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Salary:</label>
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </div>

        <button type="submit" className="submit-btn">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
