
function getInfoFromUser() {

    /************VARIABLE DECLARATION ***************/
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let dept = document.getElementById("department").value;
    let code = document.getElementById("emp_code").value;
    let hours = parseInt(document.getElementById("work_hours").value);
    let gross_sal, hourly_wage, overtime, sal, income_tax, net, health;

    if (code == "F") {
        const qualif_code = window.prompt("Please Enter the Qualification Code");
        console.log(code);

        if (qualif_code == "M") {
            gross_sal = hours * 175 + 1500; console.log(gross_sal);
            calculate_deductions();
        }

        else if (qualif_code == "B") {
            gross_sal = hours * 100 + 600;
            console.log(gross_sal);
            calculate_deductions();
        }
    }

    else if (code == "R") {
        gross_sal = window.prompt("Please Enter the fixed salary per month");
        hourly_wage = gross_sal / 160;


        if (hours == 160) {
            sal = gross_sal;
            console.log(sal);
            calculate_deductions();
            paySlip();
        }

        else if (hours < 160) {
            gross_sal = hours * hourly_wage;
            console.log(gross_sal);
            calculate_deductions();
        }

        else {
            overtime = hours - 160;
            gross_sal = (160 * hourly_wage) + overtime * (hourly_wage * 2);
            console.log(gross_sal);
            calculate_deductions();
        }
    }

    function calculate_deductions() {

        if (gross_sal > 2500 && gross_sal > 3000) {
            income_tax = gross_sal * 0.25; console.log(income_tax);
            health = 33;
            net = income_tax - health + 2500; console.log(net);
            paySlip();
        }

        else if (gross_sal > 2500 && gross_sal < 3000) {
            income_tax = (gross_sal - 2500) * 0.25;
            health = 19.20;
            net = gross_sal - income_tax - health;
            paySlip();
        }

        else if (gross_sal < 2500) {
            //income_tax = (gross_sal - 2500) * 0.25; no income tax
            income_tax = "No Income tax deducted."
            health = 19.20;
            net = gross_sal - health;
            paySlip();
        }
    }
    
    function paySlip() {
        console.log("Name:", name, "Employee number ", number);
        console.log("Employee Department", dept);
        console.log("Qualification Code", code);
        console.log("Number of Hours Worked", hours);
        console.log("Gross salary for the employee", gross_sal);
        console.log("Deductions for income tax and health subcharge fee respectively : ", income_tax, health);
        console.log("Total In-hand salary", net);
    }

}


let btn = document.getElementById("type");
btn.addEventListener("click", getInfoFromUser);