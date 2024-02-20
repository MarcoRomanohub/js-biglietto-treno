//1
const km = prompt('Quanti km vuoi percorrere?')
console.log(km);
//2
const etaUtente = prompt('Quanti anni hai?')
console.log (etaUtente);
//3
let prezzoBiglietto = km * 0.21;

let sconto = '';

if(etaUtente < 18){
  sconto = prezzoBiglietto * 20 / 100;
} else if(etaUtente > 65){
  sconto = prezzoBiglietto * 40 / 100;
}
prezzoBiglietto = prezzoBiglietto - sconto 
prezzoBiglietto = Math.round(prezzoBiglietto*100)/100;
console.log(prezzoBiglietto);