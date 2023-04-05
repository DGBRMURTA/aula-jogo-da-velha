//cliques iniciais
cliques = 0
//uma variável servindo de array com todos os valored da classe "bloco"
var elm = document.getElementsByClassName('bloco')
//uma função procurando os valores para acressentar de acordo com a quantia de cliques
function Mostrar(qual){
    cliques = cliques + 1
    if(elm[qual -1].innerHTML == ""){
        if(cliques == 1){
            elm[qual -1].innerHTML = "X"
        }
        else if(cliques == 2){
            elm[qual -1].innerHTML="O"
            cliques = 0
        }
    }




}
function limpa(){
    cliques = 0;
    document.getElementsByClassName('tabuleiro')[0].innerHTML = '<div class="container">'
                             +'<div class="bloco" id="op1" onclick="Mostrar(1)"></div>'
                             +'<div class="bloco" id="op2" onclick="Mostrar(2)"></div>'
                             +'<div class="bloco" id="op3" onclick="Mostrar(3)"></div>'
                             +'</div>'
                             +'<div class="container">'
                             +'<div class="bloco" id="op4" onclick="Mostrar(4)"></div>'
                             +'<div class="bloco" id="op5" onclick="Mostrar(5)"></div>'
                             +'<div class="bloco" id="op6" onclick="Mostrar(6)"></div>'
                             +'</div>'
                             +'<div class="container">'
                             +'<div class="bloco" id="op7" onclick="Mostrar(7)"></div>'
                             +'<div class="bloco" id="op8" onclick="Mostrar(8)"></div>'
                             +'<div class="bloco" id="op9" onclick="Mostrar(9)"></div>'
                             +'</div>'
}


//define o tabuleiro
var board = [['','',''],
               ['','',''],
               ['','','']]
//loop para pegar todos os valores da classe "bloco"

board.push('olá');
console.log(board)

alert(board)
//define a função para achar o ganhador               
function QualGanhador(){
    //loop para verificar as linhas
    for(i = 0; i < 3; i++){
        if(board[i][0] != '' && board[i][0] == board[i][1] && board[i][1] == board[i][2]){
        return board[i][0];}
    }
    //loop para verificar as colunas
    for(j=0; j <3; j++){
        if(board[0][j] != '' && board[0][j] == board[1][j] && board[1][j] == board[2][j]){
            return board[0][j]
        }
    }
    //verificar diagonais
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
      }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
      }

      return null;
}
board[0][0] = 'X';
board[1][1] = 'X';
board[0][1] = 'O';
board[1][2] = 'O';
board[2][2] = 'X';
board[2][0] = 'O';
board[2][1] = 'X';
board[0][2] = 'O';


const winner = QualGanhador()
if (winner) {
    alert(`O jogador ${winner} venceu!`);
  } else {
    alert("Empate!");
  }