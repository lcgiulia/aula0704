const botao= document.getElementById('add');
const entrada = document.getElementById('entrada');
const lista = document.getElementById('lista');

// array, lista, vetor 
const itens = [];

botao.addEventListener('click',
function (){
    let valorInput=entrada.value;
    itens.push(valorInput);
    console.log(itens);
    atualizar();
   }
);

function atualizar(){
    lista.innerHTML= "";
    let li = document.createElement("li");
    li.textContent="Deu certo.";
    lista.appendChild(li);
}