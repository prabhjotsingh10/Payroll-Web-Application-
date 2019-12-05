
function getInfoFromUser() {

    /************VARIABLE DECLARATION ***************/

    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let dept = document.getElementById("department").value;
    let code = document.getElementById("emp_code").value;
    let hours = parseInt(document.getElementById("work_hours").value);
    let gross_sal, hourly_wage, overtime, fixed_sal, income_tax, net, health;

    if (code == "F") {
        const qualif_code = window.prompt("Please Enter the Qualification Code");

        if (qualif_code == "M") {
            gross_sal = hours * 175 + 1500; 
            calculate_deductions();
        }

        else if (qualif_code == "B") {
            gross_sal = hours * 100 + 600;
            calculate_deductions();
        }

        else{
            alert("Invalid Code! Please try again!");
        }
    }

    else if (code == "R") {
        fixed_sal = window.prompt("Please Enter the fixed salary per month");
        hourly_wage = fixed_sal / 160;


        if (hours == 160) {
            gross_sal = fixed_sal;
            calculate_deductions();
        }

        else if (hours < 160) {
            gross_sal = hours * hourly_wage;
            calculate_deductions();
        }

        else {
            overtime = hours - 160;
            gross_sal = (160 * hourly_wage) + overtime * (hourly_wage * 2);
            calculate_deductions();
        }
    }

    else{
        alert("Invalid Code! Please try again!");
    }

    /************NESTED FUNCTIONS *****************/

    function calculate_deductions() {

        if (gross_sal > 3000) {
            income_tax = (gross_sal - 2500) * 0.25;
            health = 33; 
            net = gross_sal - income_tax - health ;
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

        document.getElementById("displayed_name").value = name;
        document.getElementById("displayed_number").value = number;
        document.getElementById("displayed_qualif_code").value = code;
        document.getElementById("displayed_department").value = dept;
        document.getElementById("displayed_work_hours").value = hours;
        document.getElementById("displayed_gross_sal").value = "$ " + gross_sal;
        document.getElementById("displayed_income_tax").value = "$ "+ income_tax;
        document.getElementById("displayed_health_fee").value = "$ " + health;
        document.getElementById("displayed_total_sal").value = "$ " + net;        
       
    }

}

/*************EXECUTION *****************/

let btn = document.getElementById("type");
btn.addEventListener("click", getInfoFromUser);