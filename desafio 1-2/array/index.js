const users = [
    {name: 'Eric', age: 25, tecnology: {nome: 'JS', especialidade: 'Web' }},
    {name: 'Thamiris', age: 24, tecnology: {nome: 'C++', especialidade: 'Desktop' }},
]

for (user of users) {

    const {name, age} = user;

    console.log(`O usuário ${name} tem ${age} anos e 
    usa a tecnologia ${user.tecnology.nome} com especialidade em ${user.tecnology.especialidade}.`);
}



