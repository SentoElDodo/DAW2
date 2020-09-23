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

meses.forEach(element => { console.log (element) });


/* 2.B */
console.table(meses);

/* 3 */
const values = [true, false, 5, "hola", [1,2,3], {age: 2, gender: 'male'}];
values.forEach(element => {console.log(typeof element)});
