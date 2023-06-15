console.log("Welcome to Employeewage program");
// UC1....Emp Attendance Present or Absent...
const IsFulltime = 1;
const IsParttime = 2;
const EmpRatePerHr = 20;
const NumberOfWorkingDays=20;
let empWage = 0;
let empHrs = 0;
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
//..UC4 Emp Wage for 20 Working days is in a month
for(day=1;day<=NumberOfWorkingDays;day++)
{
    let empCheck = Math.floor(Math.random()*10)%3;
    empWage = EmpRatePerHr*GetWorkingHrs(empCheck);
    console.log("Day"+day+" Employee Wage is:"+empWage);
    totalWage+=empWage;     
}
console.log("TotalWage for" +(day-1)+"days is:"+ totalWage);
