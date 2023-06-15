console.log("Welcome to Employeewage program");
// UC1....Emp Attendance Present or Absent...
const IsFulltime = 1;
const IsParttime = 2;
const EmpRatePerHr = 20;
const NumberOfWorkingDays=20;
const MaxWorkingHrs = 160;
let empWage = 0;
let empHrs = 0;
let day = 1;
let WorkingHrs = 0;
let totalWage = 0;

// UC3..Func to Get Working Hrs...
function GetWorkingHrs(empCheck)
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
// UC4 & UC5 Emp Wage for 20 Working days in a month
while(day<=NumberOfWorkingDays && WorkingHrs<=MaxWorkingHrs)
{
    let empCheck = Math.floor(Math.random()*10)%3;
    empWage = EmpRatePerHr*GetWorkingHrs(empCheck);
    console.log("Day"+day+" Employee Wage is:"+empWage);
    totalWage+=empWage;
    day++
    WorkingHrs+=empHrs;
}
console.log("TotalWage for " +(day-1)+ "days and" + WorkingHrs+ "hrs is:" + totalWage);
