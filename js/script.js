{
function playGame(playerInput){
    clearMessages ();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log( 'Wylosowana liczba to:' + randomNumber);
    function getMoveName(argMoveId){
        if(argMoveId == 1)
            return 'kamień';
            
        else if(argMoveId == 2)
            return 'papier';
            
        else(argMoveId == 3)
            return 'obcęgi';
            
    }
    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);
    
    const playerMove = getMoveName(playerInput);
        
        
    printMessage('Twój ruch to: ' + playerMove);

        
    function displayResult(agrComputerMove , agrPlayerMove){
        console.log('funkcja displayResult się uruchomiła');
        
        printMessage('Zagrałem ' + agrComputerMove + ', a Ty ' + agrPlayerMove);
        if( agrComputerMove =='kamień' && agrPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');         
        }
        else if( agrComputerMove =='papier' && agrPlayerMove == 'obcęgi'){
            printMessage('Ty wygrywasz!');
        }
        else if( agrComputerMove == 'obcęgi' && agrPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        }
        else if( agrComputerMove =='papier' && agrPlayerMove == 'kamień'){
            printMessage('Przegrałeś, spróbuj jeszcze raz!');
        }
        else if(agrComputerMove =='obcęgi' && agrPlayerMove == 'papier'){
            printMessage('Przegrałeś, spróbuj jeszcze raz!');
        }
        else if(agrComputerMove =='kamień' && agrPlayerMove == 'obcęgi'){
            printMessage('Przegrałeś, spróbuj jeszcze raz!');
        }
        else if(agrComputerMove =='obcęgi' && agrPlayerMove == 'obcęgi'){
            printMessage('Remis, spróbuj jeszcze raz :D');
        }
        else if(agrComputerMove =='kamień' && agrPlayerMove == 'kamień'){
            printMessage('Remis, spróbuj jeszcze raz :D');
        }
        else if(agrComputerMove =='papier' && agrPlayerMove == 'papier'){
            printMessage('Remis, spróbuj jeszcze raz :D');
        }
        else if(agrComputerMove =='kamień' && agrPlayerMove == 'nieznany ruch'){
            printMessage('Nieznany ruch');
        }
        else if(agrComputerMove =='papier' && agrPlayerMove == 'nieznany ruch'){
            printMessage('Nieznany ruch');
        }
        else if(agrComputerMove =='obcęgi' && agrPlayerMove == 'nieznany ruch'){
            printMessage('Nieznany ruch');
        }
    }
    displayResult(computerMove,playerMove);
}
//playGame(3);
document.getElementById('play-rock').addEventListener('click', 
function(){
    console.log('klik kamien');
    playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', 
  function(){
    console.log('klik papier');
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', 
function(){
    console.log('klik nozyce');
    playGame(3);
  });
}


