class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    //Define a prop that calls a function using "get"
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    //all employees have a method(function) to allow a promotion for a new job
    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }
}
// TESTS
//create a new instance of employee and assign to loyal variable
let employee1 = new Employee(1, "Charles", "Bean", "Mechanic", 18.25);

//excercise 2 test
employee1.promote("Sr. Mechanic", 25.58);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);