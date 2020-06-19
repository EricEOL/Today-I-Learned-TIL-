const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(type, value){
    
    user.transactions.push({type: type, value: value});

    if (type === 'credit') {
        user.balance += value;
    } else {
        user.balance -= value;
    }
}

createTransaction('credit', 50.5);
createTransaction('credit', 100);
createTransaction('credit', 102);
createTransaction('debit', 300);
createTransaction('debit', 310);

function getHigherTransactionByType(type){
    let higherTransaction;
    let higherValue = 0;

    for(transaction of user.transactions){
        if(transaction.type == type && transaction.value > higherValue){
            higherValue = transaction.value;
            higherTransaction = transaction;
        }
    }

    return higherTransaction;
}

console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));

function getAverageTransactionValue(){
    
    var sumTransactions = 0;

    for(transaction of user.transactions){
        sumTransactions += transaction.value; 
        console.log(sumTransactions);
    }

    const avgTransaction = sumTransactions/user.transactions.length;

    console.log(avgTransaction.toFixed(2));
} 

getAverageTransactionValue();

function getTransactionCount(){
    let count = {
        credit: 0,
        debit: 0,
    }
    for(transaction of user.transactions){
        if(transaction.type == 'credit'){
            count.credit++;
        } else {
            count.debit++;
        }
    }

    console.log(count)
}

getTransactionCount();

console.log(user);