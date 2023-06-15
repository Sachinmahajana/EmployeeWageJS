console.log("Welcome to Employeewage program");
// UC1....Emp Attendance Present or Absent...
const IsFulltime = 1;
const IsParttime = 2;
const EmpRatePerHr = 20;
let empWage = 0;
let empHrs = 0;
let empCheck = Math.floor(Math.random()*10)%3;

// UC3..Func to Get Working Hrs...
function GetWorkingHrs()
{
   switch(empCheck)
   {
     case IsFulltime:
       empHrs = 8;
         return empHrs;
     case IsParttime:
       empHrs = 4;
       return empHrs;
     default:
        empHrs = 0;
        return empHrs;
    }
} 
//..UC2..Calculate Wage...
empWage = EmpRatePerHr*GetWorkingHrs();
console.log("EmployeeWage is:" + empWage);   