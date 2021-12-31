

function compute()
{ 
    var PRINCIPAL = document.getElementById("principal").value;
    var RATE = document.getElementById("rate").value;
    var YEARS = document.getElementById("years").value;
    var AMOUNT = (RATE/100*PRINCIPAL)*YEARS;
    var PARA = document.createElement("P");
    PARA.innerHTML = "If you deposit "+PRINCIPAL + "<br/>" + "at an interest rate of " + RATE + "%. <br/>"+ "You will receive an amount of "+ AMOUNT + ",<br/>" + "in the year 202" + YEARS;

    console.log(PRINCIPAL,RATE,YEARS,AMOUNT);
    document.getElementById("RESULT").innerHTML=PARA.innerHTML;
}
