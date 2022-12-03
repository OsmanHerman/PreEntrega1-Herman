//Declaración de variables.
let monto = 0;
let days = 0;
let conf = 'NO';
let conf2 = '';
let interes = 0;
let retiro = 0;
let m1 = 0;
let d1 = 0;
const TNA = 75;

//Declaración de funciones.
function error() {return alert("Error: Ingrese los datos solicitados.");}

function isDigitChar (char) {
    return char==="0" || char==="1" || char==="2" || char==="3" || char==="4" || char==="5" || char==="6" || char==="7" || char==="8" || char==="9";
}

function isDigit (string) {
    for (let i=0; i<string.length; i++) {
        if (!isDigitChar(string[i])) return false;
    }
    return true;
}

function isFloat (string) {
    let dot = 0;
    let dotPosition;
    for (let i=0; i<string.length; i++) {
        if (string[i] === '.') {
            dot++;
            dotPosition = i;
        }
        if (dot>1) return false;
    }
    if (!isDigit(string.slice(dotPosition+1))) return false;
    if (!isDigit(string.slice(0, dotPosition))) return false;
    return true;
}

function SegurityDatesMonto (number) {
    while ((isFloat(number) === false) || (number < 1000 || number >1000000)){
        error();
        number = parseFloat(prompt("Ingrese el monto a invertir: ")).toFixed(2);
    }
    return number;
}

function SegurityDatesDays (number) {
    while ((isDigit(number) === false) || (number < 30 || number > 365)){
        error();
        number = parseInt(prompt("Ingrese una cantidad entre 30 y 365 días: ")).toFixed();
    }
    return number;
}

function YesNo (string) {
    while (string !== "NO" && string !== "SI"){
        error();
        string = prompt("Ingrese SI o NO: ").toUpperCase();
    }
    return true;
}

function PlazoFijo () {
    dif = (((monto*(TNA/100))/365)*days).toFixed(2);
    ext = (parseFloat(monto) + parseFloat(dif)).toFixed(2);
    return alert("Estimado Usuario, tenemos el agrado de informarle los siguientes resultados:\nTNA = "+TNA+"%\nIntereses ganados: $"+dif+"\nMonto a retirar $"+ext);
}

function PlazoFijoOpc () {
    for (let i=1; i < 13; i++){
        days = 30*i;
        dif = (((monto*(TNA/100))/365)*days).toFixed(2);
        ext = (parseFloat(monto) + parseFloat(dif)).toFixed(2);
        alert("Opción de "+days+" días:\nTNA = "+TNA+"%\nIntereses ganados: $"+dif+"\nMonto a retirar $"+ext);
    };
    return;
}

//Inicio del Simulador de Plazos Fijos.
alert("Ha ingresado al simulador de plazos fijos.\nTiene un rango de $1.000 a $1.000.000 para realizar la simulación.");

while (conf ==="NO" ) {
    monto = parseFloat(prompt("Ingrese el monto a invertir: ")).toFixed(2);
    monto = SegurityDatesMonto (monto);
    m1 = monto;
    alert("¿En cuantos días desea retirar el dinero?");
    days = parseInt(prompt("Ingrese una cantidad entre 30 y 365 días: ")).toFixed();
    days = SegurityDatesDays (days);
    d1 = days;
    alert("Usted desea invertir $"+monto+" y retirarlo en "+days+" días ¿Es correcto?.\nEn caso de ser correcto escriba 'SI', ecaso de ser incorrecto coloque 'NO'.");
    conf = prompt("Ingrese SI o NO: ").toUpperCase();
    if (YesNo(conf)) continue;
}

PlazoFijo ();
alert("¿Desea ver otras opciones de plazo fijo con el monto ingresado? \nEscriba SI o NO según lo que desee:");
conf2 = prompt("Ingrese SI o NO: ").toUpperCase();
if (YesNo(conf2)) {
    if (conf2 === "SI"){
        PlazoFijoOpc();
    }
    alert("Fue un placer haber simulado su plazo fijo. Vuelva pronto!");
}

document.getElementById("tna").value=TNA+"%";
interes = (((m1*(TNA/100))/365)*d1).toFixed(2);
document.getElementById("interes").value="$"+interes;
retiro = (parseFloat(m1) + parseFloat(interes)).toFixed(2);
document.getElementById("retiro").value="$"+retiro;
