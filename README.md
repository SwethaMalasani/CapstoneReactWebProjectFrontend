# APPLICATION NAME/APPLICATION TITLE

Employment Management System

#### INSERT 1 SENTANCE SUMMARY OF YOUR APPLICATION/GAME HERE

An Employment Management System (EMS) is a software application or platform designed to 
streamline and automate various aspects of employee management within an organization. 
It helps HR departments and managers efficiently handle tasks related to employees


<img src="./src/images/Hrprojectimage.JPG" alt="HR Management Home Screen"/>


## Description
Description of your app. 
Employee Records Management Application Stores and manages employee details such as
personal information, job roles, departments, and salary and Hr can able to perform all
CRUD(Create, Read, Update and Delete) operations of Employees.

## Table of Contents
* [Technologies Used](#technologiesused)
* [Features](#features)
* [Design](#design)
* [Project Next Steps](#nextsteps)
* [Deployed App](#deployment)
* [About the Author](#author)

## <a name="technologiesused"></a>Technologies Used
* MongoDB
* Express
* React
* Nodejs
* JavaScript
* CSS3


## Features
Users can visit Welcome Home Page and can navigate to Login, directly Employees page or ContactUs page .
Login:            Users can Login, currently hardcoded login name and password and navigate to Employees Page once logged in.
Contact Us:       Users looking for any HR portal for their company they can contact by providing details Name, Email and message
                  will be popped up as Thank you for contacting we will reach you shortly.
Create Employee:  Users can visit the Employees page new employees can be created on Create Employee. 
                  A new form will be opened to enter EmployeeId, Employee Name, Location,Department,Salary.
  				  Once Add employee is clicked a pop up will show that Employee is created successfully.
Search Employee:  Users can search for the existing employees.

Update Employee:  Users can search for any employee and from employee list click on update. A new update form will be opened and edit the text and click on update employee.
                  A pop up will show employee has been updated successfully.
				  
Delete         : User can Delete the employee and will be removed from employees list.
				  



## Wireframe Images
<img src="./src/images/employeewireframe.png" alt="HR Management Home Screen"/>






## <a name="design"></a>Design
* Descrition of what inspired your design. Ex: Design elements implemented using HTML5 and CSS3. 
I worked in ERP HRMS technnical. I felt excited to put same on web development make myself a 
HR portal using HTML and CSS, ReactJs and saving the same into MongoDB No SQL database.

## ERD Images & DB Structure
* Embeded ERD Images
#Images used in project.
 <img src="https://primepay.com/wp-content/uploads/Growing-Wheel-PP-10.25.24.gif" alt="HR Management" />
 <img src="https://cdnl.iconscout.com/lottie/premium/thumb/human-resources-department-animation-download-in-lottie-json-gif-static-svg-file-formats--candidate-pack-business-animations-9665233.gif" alt="Employee Engagement" />
 <img src="https://nextuae.com/wp-content/uploads/2023/12/HR-GIF.gif" alt="Team Collaboration" />
 <img src="https://media4.giphy.com/media/daUvAd1osc2QH7111b/giphy.gif" alt="Love HR" /><img src="https://www.hrcloud.com/hubfs/blog-post%20%231%28%20workmates%20campaign%29.gif" alt="Team" />
 <img src="https://media2.giphy.com/media/IhWIPeLT9UtAG1Uf4U/200w.gif" alt="Collaboration" />
 <img src="https://media1.giphy.com/media/3o84Ue0j5fFc8FRSIo/200w.gif" alt="Employee Appreciation" />
 <img src="https://media2.giphy.com/media/zLkaYkhl4WTF4cbErF/200w.gif" alt="Work from Home" />
 
 ##My Database Schema
 employeeId: { type: String, required: true, unique: true },
  employeeName:{type:String,required:true},
  location: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true }
  
  #Sample data
  
{"_id":{"$oid":"67b79118e72200d314c68356"},
"employeeId":"PS70",
"employeeName":"swetha",
"location":"chicago",
"department":"sales",
"salary":{"$numberInt":"80000"}}

## <a name="nextsteps"></a>Project Next Steps
#### List of Future Features
Develop a notification to employees once created or updated employee details.
Develop Payslip generation
Develop leave management
Login as of now hardcoded make it verify username based on database data existence.

## <a name="deployment"></a>Deployed Link
[Netlify]([https://wonderful-brahmagupta-6a75d3.netlify.com](https://connect4pc.netlify.app/))

* You can view the repository:
[Github.com](https://github.com/Gr8ness21/Connect-4)
https://github.com/SwethaMalasani/CapstoneReactWebProjectFrontend.git #frontend
https://github.com/SwethaMalasani/CapstoneReactWebProjectbackend.git  #backend


## <a name="author"></a>About The Author
I build applications and mini projects tied to my various interests. 
I look for creative solutions to real world problems and think of technical ways to address them.
 While no application is ever perfect I find joy in the process and all my final products!
[Developer LinkedIn]: Swetha Malasani- https://www.linkedin.com/in/swetha-malasani-943652338/

## Special Mention: Supporters of the build
* Developer(s) - Sahithi Mukkisa-linkedin:linkedin.com/in/sahithi-mukkisa-80a140341










