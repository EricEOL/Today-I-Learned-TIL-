const name = prompt('Digite seu nome');
const weight = prompt('Digite seu peso');
const height = prompt('Digite sua altura');
const gender = prompt('Digite seu sexo');

let imc = weight / Math.pow(height,2);

if(imc>=30){
    alert(`${name}, você está acima do peso.`);
} else {
    alert(`${name}, você não está acima do peso.`)
}