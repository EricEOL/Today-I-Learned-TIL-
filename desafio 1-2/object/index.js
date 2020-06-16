const enterprise = {
    name: 'Rocketseat',
    color: 'purple',
    focus: 'Programming',
    address: {
        street: 'Rua Guilherme Gembala',
        number: 260
    }
}

const { name, address: {street}, address: {number} } = enterprise;

console.log(`A empresa ${name} está localizada em ${street}, ${number}`);

