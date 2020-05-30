/*class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class todoList extends List{
    constructor(){
        super();

        this.usuario = 'Eric';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new todoList();

document.querySelector('#novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario(); */

/*
//Quando tem um método estático ele não encherga o restante da classe, por isso não é possível chamar o this.todo com ele.
class TodoList{
    constructor(){
        this.todos = [];
    }

    static addTodo(){
        this.todos.push('New todo');
        console.log(this.todos);
    }
}

TodoList.addTodo(); */

/*
class Matematica {
    static soma(a,b){
        return a + b;
    }
}

console.log(Matematica.soma(3,5));*/

/*
//Manipulando arrays *Map *Reduce *Filter *Find
const arr = [1,3,4,5,8,9];
const newArr = arr.map((item,index) =>{
    return item+index;
});

console.log(newArr);

const sumNewArr = newArr.reduce((acc, curr)=>{
    return acc + curr;
});

console.log(sumNewArr);

const filtrando = arr.filter(valor=>{
    return valor % 2 === 0;
});

console.log(filtrando);

const find = arr.find(item=>{
    return item === 4; 
});

console.log(find);

import {sum} from './functions';

console.log(sum(3,4));
alert('Testando...');
//Exercícios 1.1, 1.2 e 1.3
import User, {idade as idadeUsuario} from './functions';

console.log(User.info());
console.log(idadeUsuario);

const myPromise = ()=> new Promise((resolve, reject)=>{
    setTimeout(()=>{ resolve('OK')}, 2000);
});

myPromise().then(response=>{
    console.log(response);
})
.catch(err=>{

});

const myPromise = ()=> new Promise((resolve, reject)=>{
    setTimeout(()=>{ resolve('OK')}, 2000);
});

async function executaPromise(){
    const resolve = await myPromise();

    console.log(resolve);
}

console.log(executaPromise());



import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch(err){
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('ericeol');

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}
umPorSegundo();

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const newUmPorSegundo = async ()=>{
    const resolve = await delay();
    console.log(resolve);
}

newUmPorSegundo();
newUmPorSegundo();
newUmPorSegundo();

import axios from 'axios';

function getUserFromGithub(user) {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


async function getUserFromGithub(user){
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    } catch (err){
        console.log('Erro no usuário');
    }
}

getUserFromGithub('ericeol');
getUserFromGithub('ericeol23123');

import axios from 'axios';

const buscaUsuario = user => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Usuário não existe');
    });
   }

buscaUsuario('diego3g');

import axios from 'axios';
const buscaUsuario = async (user) => {
    try{
        const userData = await axios.get(`https://api.github.com/users/${user}`);
        console.log(userData);
    } catch(err){
        console.warn('Usuário não encontrado!');
    }
}
buscaUsuario('diego3g');
*/