//Funcion que toma los valores de los inputs y los guarda en variables.
function compute()
{
   var principal = document.getElementById("principalid").value;
    var rate = document.getElementById("rateid").value;
    var years = document.getElementById("yearsid").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
   if (principal >= 1){//Si se ingresa un numero positivo se ejecuta
    document.getElementById("result").innerText = interest;
    document.getElementById("valores").innerHTML="<br\>If you deposit <b>"+principal+"</b>,\<br\>At an interest rate of <b>"+rate+"%</b>\<br\>You will receive an amount of <b>"+interest+"</b>,\<br\>In the year <b>"+year+"</b>\<br\>"
    }
    else //Muestra alerta si se ingresa un numero negativo
    alert("Enter a positive number");
    principalid.focus();
   
    
}
//Funcion que muestra el valor que tiene el range.
function updateRate() 
{
    var rateval = document.getElementById("rateid").value;
    document.getElementById("rate_val").innerText =rateval;

}
        