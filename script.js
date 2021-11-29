let input = document.getElementById("texto-tarefa");
let enterButton = document.getElementById("criar-tarefa");
let ol = document.getElementById("lista-tarefas");
let item = document.getElementsByTagName("li");
let apagaTudo = document.getElementById('apaga-tudo');
let removerFinalizados = document.getElementById('remover-finalizados');

function createAnItemInTheList() {
  let li = document.createElement("li"); 
  ol.appendChild(li); 
  li.innerText = input.value; 
  input.value = "";
}

function onlyTheSelectedItemIsGray(event) {
  let ol = document.getElementById("lista-tarefas");
  for (let i = 0; i < ol.children.length; i += 1) {
    ol.children[i].classList.remove("done");
  }
  event.target.className = "done";
}

function markTheItemAsCompleted(e) {
  console.dir(e);
  if (e.target.classList.contains('completed') == true) {
    e.target.classList.remove('completed');
  } else if (e.target.classList.contains('completed') == false) {
      e.target.classList.add('completed');  
    }
}

function eraseEverything() {
  let ol = document.getElementById("lista-tarefas");
  ol.innerHTML = '';
}

function removeOnlyCompletedOnes () {
  let item = document.querySelectorAll("li");
  for(i = 0; i < item.length; i += 1) {
    if (item[i].classList.contains('completed')) {
      item[i].remove();      
    }
  }  
}

function listeners() {
  enterButton.addEventListener("click", createAnItemInTheList);
  ol.addEventListener("click", onlyTheSelectedItemIsGray);
  ol.addEventListener("dblclick", markTheItemAsCompleted);
  apagaTudo.addEventListener('click', eraseEverything);
  removerFinalizados.addEventListener('click', removeOnlyCompletedOnes);
  }
  window.onload = function init() {
    listeners();
}










// let input = document.getElementById("texto-tarefa");
// let enterButton = document.getElementById("criar-tarefa");
// let ol = document.getElementById("ol");
// let item = document.getElementsByTagName('li');

// function inputLength() {
//   return input.value.length;
// }

// // Função que cria o elemento 
// function createAnItemInTheList() {
//   let li = document.createElement('li');//tendo criado a let item para recuperar (getElementsByTagName) a tag li, agora, quando invocada esta função, é criada (createElement) aquela tag li e armazenada na let li
//   //li.appendChild(document.createTextNode(input.value)); //O valor digitado no input é transformado em um nó de texto que será filho da li
//   ol.appendChild(li);
//   input.value = ''; //reseta o valor do input

//   function onlyTheSelectedItemIsGray() { //habilitar a mudança de cor
//     li.classList.toggle('done'); //toggle verifica se a classe .done está presente: caso sim, remove-a, caso não adicioná-a. 
//   }
//   li.addEventListener('click', onlyTheSelectedItemIsGray);

//   let dbtn = document.createElement('button');
//   dbtn.appendChild(document.createTextNode('X'));
//   li.appendChild(dbtn);
//   dbtn.addEventListener('click', deleteListItem());
  
//   function deleteListItem() {
//     li.classList.add('delete'); 
//   }
// }

// // criando dois eventos: click e keypress
// enterButton.addEventListener('click', addListAfterClick);
// input.addEventListener('keypress', addListAfterKeypress);

// // evita um valor vazio no input
// function addListAfterClick() {
//   if (inputLength() > 0) {
//     createAnItemInTheList();
//   }
// }

// // habilita a tecla 'Enter', além do click
// // 13 é o código chave da tecla 'Enter'
// // event.keyCode === 13 também funcionaria
// function addListAfterKeypress() {
//   if(inputLength() > 0 && event.which === 13){
//     createAnItemInTheList();
//   }
// }
