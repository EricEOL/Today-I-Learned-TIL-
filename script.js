/*
//Exercício 2
//* 2.1
const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'}
];

const mapUsuarios = usuarios.map(userAge=>{
    return userAge.idade;
});

console.log(mapUsuarios);

//* 2.2
const filterUsers = usuarios.filter(users =>{
    if(users.empresa === "Rocketseat" && users.idade >= 18){
        return users;
    }
});
console.log(filterUsers);

//*2.3
const findUsers = usuarios.find(users=>{
    return users.empresa === "Google";
});
console.log(findUsers);

//*2.4
const usersx2 = usuarios.map(user=>{
    return {
        nome: user.nome,
        idade: user.idade*2,
        empresa: user.empresa
    }
})
console.log(usersx2);
const userMax50 = usersx2.filter(user=>{
    if (user.idade <= 50){
        return user;
    }
});
console.log(userMax50);

//Exercício 3
//* 3.1
const arr = [1,2,3,4,5];
const arrMap = arr.map(item=>{
    return item + 10;
})
console.log(arrMap);
//* 3.2
const usuario = {nome: 'Diego', idade: 23};

const mostraIdade = usuario=> usuario.idade;
console.log(mostraIdade(usuario));
//*3.3
const nome = "Eric";
const idade = 23;

const mostraUsuario = (nome = "Panda",idade = 150)=>{return {nome, idade}};
console.log(mostraUsuario(nome,idade));
console.log(mostraUsuario(nome));
//*3.4
const promise = ()=>{
    return new Promise((resolve, reject)=>{
        return resolve;
    });
}
console.log(promise());

// Exercício 4
//* 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco:{
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};
const {nome, endereco: {cidade, estado}} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

//* 4.2
const usuario = {
    nome: 'Eric',
    idade: 25
}
const {nome, idade} = usuario;
function mostraInfo(nome, idade){
    return `${nome} tem ${idade} anos`;
}
console.log(mostraInfo(nome, idade));
*/
//Exercício 5
//* 5.1
const arr = [1,2,3,4,5,6];

const [x,...y] = arr;
console.log(x);
console.log(y);