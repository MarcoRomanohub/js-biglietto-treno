//1
const km = prompt('Quanti km vuoi percorrere?')
console.log(km);
//2
const etaPasseggero = prompt('Quanti anni hai?')
console.log (etaPasseggero);
//3
let prezzoBiglietto = km * 0.21;

let sconto = '';

if(etaPasseggero < 18){
  message = 'I passeggeri minorenni hanno diritto ad uno sconto del 20%, il tuo biglietto ha un costo di: €'
  sconto = prezzoBiglietto * 0.2;
} else if(etaPasseggero > 65){
  message = 'I passeggeri over 65 hanno diritto ad uno sconto del 40%, il tuo biglietto ha un costo di: €'
  sconto = prezzoBiglietto * 0.4;
} else{
  message = 'Il tuo biglietto ha un costo di: €'
}
prezzoBiglietto = prezzoBiglietto - sconto 
console.log(prezzoBiglietto);

document.getElementById('output').innerHTML = message + prezzoBiglietto.toFixed(2);