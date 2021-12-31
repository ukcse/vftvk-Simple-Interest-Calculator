

function Compute()
{ 
    var PRINCIPAL = document.getElementById("principal").value;
    var RATE = document.getElementById("rate").value;
    var YEARS = parseInt(document.getElementById("years").value);
    var AMOUNT = (RATE/100*PRINCIPAL)*YEARS;
    var PARA = document.createElement("P");
    var FUTUREYEAR= new Date().getFullYear() + YEARS;
    PARA.innerHTML = "If you deposit <mark>"+ PRINCIPAL+"</mark>+ <br/>" + "at an interest rate of <mark>" + RATE + "%.</mark> <br/>"+ "You will receive an amount of <mark>"+ AMOUNT + "</mark>,<br/>" + "in the year <mark>" + FUTUREYEAR + "</mark>";

    console.log(PRINCIPAL,RATE,YEARS,AMOUNT);
    document.getElementById("RESULT").innerHTML=PARA.innerHTML;
}

function Validate_Amount()
{
    var PRINCIPAL=document.getElementById("principal").value;
    if (PRINCIPAL<=0 || PRINCIPAL==NaN) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } 
    
}

