const users = [
    {nome: 'Eric', tecnologies: ['JS', 'HTML', 'CSS']},
    {nome: 'Thamiris', tecnologies: ['C#', 'C++', 'C']},
    {nome: 'Lucas', tecnologies: ['JAVA', 'KOTLIN', 'GO', 'CSS']}
]

const h1 = document.querySelector('#text');

for (user of users){
    const text = document.createElement('h4');
    h1.appendChild(text); 
    text.innerHTML = `${user.nome} trabalha com ${user.tecnologies}`;

    checkIfUseCSS(user);
}

function checkIfUseCSS(user){
    if(user.tecnologies.includes('CSS')){
        console.log(`${user.nome} usa CSS`);
    } else {
        console.log(`${user.nome} não usa CSS`);
    }
}

