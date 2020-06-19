const users = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

const somaReceitas = (acc, currentvalue) => acc + currentvalue;
const somaDespesas = (acc, currentvalue) => acc + currentvalue;

function calculaSaldo(receitas, despesas){
    return receitas - despesas;
}

for (user of users){

    let totalReceitasUser = user.receitas.reduce(somaReceitas);
    
    let totalDespesasUser = user.despesas.reduce((acc, currentValue)=>{
        return acc + currentValue;
    })

    const saldo = calculaSaldo(totalReceitasUser, totalDespesasUser);

    console.log(`${user.nome}. Receitas: ${totalReceitasUser.toFixed(2)}, Despesas ${totalDespesasUser.toFixed(2)}`);
    console.log(`Saldo: ${saldo.toFixed(2)}`);

    if(saldo >= 0.1){
        console.log(`O saldo de ${user.nome} está POSITIVO`);
    } else {
        if(saldo == 0){
            console.log (`O saldo de ${user.nome} é NULO`);
        } else {
            console.log (`O saldo de ${user.nome} está NEGATIVO`);
        }
    }
}