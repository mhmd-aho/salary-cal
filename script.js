const form = document.getElementById('form')
const amount = document.getElementById('amount');
const selected = document.getElementById('for');
const hoursPerWeek = document.getElementById('hpw');
const daysPerWeek = document.getElementById('dpw');
const hourlySalary=document.getElementById("hourlySalary");
const dailySalary=document.getElementById("dailySalary");
const weeklySalary=document.getElementById("weeklySalary");
const semiMonthlySalary=document.getElementById("sMonthlySalary");
const monthlySalary=document.getElementById("monthlySalary");
const quarterSalary=document.getElementById("quarterlySalary");
const annualSalary = document.getElementById('annualSalary');
const hoursPerDay = hoursPerWeek.value / daysPerWeek.value
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const amountValue = amount.value;
    const hpw = hoursPerWeek.value;
    const dpw = daysPerWeek.value;  
    function hourlySelected(){
        hourlySalary.innerText = amountValue;
        dailySalary.innerText = amountValue * (hpw / dpw);
        weeklySalary.innerText = amountValue * hpw;
        semiMonthlySalary.innerText = amountValue * (hpw *2) ;
        monthlySalary.innerText = amountValue *(hpw *4);
        quarterSalary.innerText =  amountValue * (hpw * 12);
        annualSalary.innerText = amountValue * (hpw * 48);
    }
    function dailySelected(){
        hourlySalary.innerText = amountValue / (hpw / dpw);
        dailySalary.innerText = amountValue;
        weeklySalary.innerText = amountValue *dpw;
        semiMonthlySalary.innerText = amountValue * (dpw *2);
        monthlySalary.innerText = amountValue * (dpw * 4);
        quarterSalary.innerText =  amountValue * (dpw * 12);
        annualSalary.innerText = amountValue * (dpw * 48);
    }
    function weeklySelected(){
        hourlySalary.innerText = amountValue / hpw;
        dailySalary.innerText = amountValue / dpw;
        weeklySalary.innerText = amountValue ;
        semiMonthlySalary.innerText = amountValue *2;
        monthlySalary.innerText = amountValue * 4;
        quarterSalary.innerText =  amountValue * 12;
        annualSalary.innerText = amountValue *48;
    }
    function monthlySelected(){
        hourlySalary.innerText = amountValue / 4  / hpw ;
        dailySalary.innerText = amountValue / 4 / dpw;
        weeklySalary.innerText = amountValue / 4;
        semiMonthlySalary.innerText = amountValue / 2;
        monthlySalary.innerText = amountValue;
        quarterSalary.innerText =  amountValue  * 3;
        annualSalary.innerText = amountValue * 12;
    }
    function annualSelected(){
        hourlySalary.innerText = amountValue / 48  / hpw ;
        dailySalary.innerText = amountValue / 48 / dpw;
        weeklySalary.innerText = amountValue / 48;
        semiMonthlySalary.innerText = amountValue / 24;
        monthlySalary.innerText = amountValue / 12;
        quarterSalary.innerText =  amountValue  / 4;
        annualSalary.innerText = amountValue;
    }
    if(selected.value === 'hourly'){
        return hourlySelected();
    }else if(selected.value === 'daily'){
        return dailySelected();
    }else if(selected.value === 'weekly'){
        return weeklySelected()
    }else if(selected.value === 'monthly'){
        return monthlySelected()
    }else if(selected.value === 'annual'){
        return annualSelected()
    }
});