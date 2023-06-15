console.log("Welcome to Employeewage program");
// UC1....Emp Attendance Present or Absent...
const IsFulltime = 1;
const IsParttime = 2;
const EmpRatePerHr = 20;
let empWage = 0;
let empHrs = 0;
let empCheck = Math.floor(Math.random()*10)%3;

switch(empCheck)
{
    case IsFulltime:
        empHrs = 8;
        break;
    case IsParttime:
        empHrs = 4;
        break;
    default:
        empHrs = 0;
        break;
} 
//..UC2..Calculate Wage...
empWage = EmpRatePerHr*empHrs;
console.log("EmployeeWage is:" + empWage);                   




