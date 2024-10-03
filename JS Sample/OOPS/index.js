// OBJECET

// let Employee = {
//     name : "John",
//     position : "Accountant",
//     salary : 30000,

//     getsalary : function() {
//         document.write ("Salary of " + this.name +" is " + this.salary)
//     }
// }

// console.log(Employee);
// document.write(Employee.name + "<br>");
// Employee.getsalary(); "<br>"


// CLASS

class Employee{
    constructor (name, postion, salary){
        this.name = name;
        this.postion = postion;
        this.salary = salary;
    }

    getsalary(){
        document.write("Salary of " + this.name + " is " + this.salary);
    }
}

let e1 = new Employee("John", "Accountant", 30000)
e1.getsalary();