const name = prompt('Digite seu nome');
const gender = prompt(`${name}, digite seu sexo(M ou F)`);
const age = prompt(`${name}, Digite sua idade`);
const contribution = prompt(`${name}, digite quantos anos você contribuiu`);

let sumAgeContribution = Number(age) + Number(contribution);

switch(gender) {
    case 'M': 
        if(contribution >= 35 && sumAgeContribution >= 95){
            alert(`${name}, você pode se aposentar.`);
        } else {
            alert(`${name}, você NÃO pode se aposentar.`)
        }
    break;

    case 'F':
        if(contribution >= 30 && sumAgeContribution >= 85){
            alert(`${name}, você pode se aposentar.`);
        } else {
            alert(`${name}, você NÃO pode se aposentar.`)
        }
    break;

    default: 
        alert(`${name}, você não digitou um sexo válido.`);
}
/*
if (gender === 'M' && contribution >= 35 && sumAgeContribution >= 95){
    alert(`${name}, você pode se aposentar.`);
    return;
} else {
    alert(`${name}, você NÃO pode se aposentar.`);
    return;
}

if (gender === 'F' && contribution >= 30 && sumAgeContribution >= 85){
    alert(`${name}, você pode se aposentar.`);
    return;
} else {
    alert(`${name}, você NÃO pode se aposentar.`);
    return;
}
*/