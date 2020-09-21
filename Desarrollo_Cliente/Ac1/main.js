/* 1.A */
alert ("Soy el primer script");

/* 1.B */
let alertMessage = "Soy el primer script"; 
alert(alertMessage);

/* 1.C */
const ALERT_MESSAGE= "Soy el primer script"+ " y estoy funcionando sobre "+ navigator.appVersion; 
alert (ALERT_MESSAGE);


/* 2.A */
let meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

meses.forEach(element => { console.log (element)
    
});

/* 2.B */
console.table(meses);