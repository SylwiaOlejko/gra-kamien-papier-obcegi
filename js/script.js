function playGame(playerInput){
    clearMessages ();
    //let computerMove = 'kamień';
    //printMessage ('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
    //let palyerMove = 'papier';
    //printMessage ( 'Zagrałem ' + computerMove + '! Jeśli Twój ruch to '+ playerMove +', to wygrywasz!');

    //let randomFaction = Math.random();
    //printMessage( 'Wylosowany ułamek to:' + randomFaction);
    //let calculation = randomFaction * 3 + 1;
    //printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);
    //let roundNumber = Math.floor(calculation);
    //printMessage ('Liczba po zaokrągleniu w dół to:' + roundNumber);


        let randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log( 'Wylosowana liczba to:' + randomNumber);
        function getMoveName(argMoveId){
            if(argMoveId == 2){
                return 'papier';
            }
            if(argMoveId == 1){
                return 'kamień';
            }
            if(argMoveId == 3){
                return 'obcęgi';
            }
        }
    let computerMove = getMoveName(randomNumber);
        /*if(randomNumber == 1){
            computerMove = 'kamień';
        }
        if(randomNumber == 2){
            computerMove = 'papier';
        }
        if(randomNumber == 3){
            computerMove = 'obcęgi';
        }*/

        printMessage('Mój ruch to: ' + computerMove);
        

    

        //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: obcęgi');
        
        console.log('Gracz wpisał: ' + playerInput);
    
        let playerMove = getMoveName(playerInput);
        /*if(playerInput == '1'){
            playerMove = 'kamień';
        }
        if(playerInput == '2'){
            playerMove = 'papier';
            //location.reload();
        }
        if(playerInput == '3'){
            playerMove = 'obcęgi';
        }*/
        
        printMessage('Twój ruch to: ' + playerMove);

        
        function displayResult(agrComputerMove , agrPlayerMove){
            console.log('funkcja displayResult się uruchomiła');
            
            printMessage('Zagrałem ' + agrComputerMove + ', a Ty ' + agrPlayerMove);
            if( agrComputerMove =='kamień' && agrPlayerMove == 'papier'){
                printMessage('Ty wygrywasz!');         
            }
            if( agrComputerMove =='papier' && agrPlayerMove == 'obcęgi'){
            printMessage('Ty wygrywasz!');
            }
            if( agrComputerMove == 'obcęgi' && agrPlayerMove == 'kamień'){
                printMessage('Ty wygrywasz!');
            }
            if( agrComputerMove =='papier' && agrPlayerMove == 'kamień'){
                printMessage('Przegrałeś, spróbuj jeszcze raz!');
            }
            if(agrComputerMove =='obcęgi' && agrPlayerMove == 'papier'){
                printMessage('Przegrałeś, spróbuj jeszcze raz!');
            }
            if(agrComputerMove =='kamień' && agrPlayerMove == 'obcęgi'){
                printMessage('Przegrałeś, spróbuj jeszcze raz!');
            }
            if(agrComputerMove =='obcęgi' && agrPlayerMove == 'obcęgi'){
                printMessage('Remis, spróbuj jeszcze raz :D');
            }
            if(agrComputerMove =='kamień' && agrPlayerMove == 'kamień'){
                printMessage('Remis, spróbuj jeszcze raz :D');
            }
            if(agrComputerMove =='papier' && agrPlayerMove == 'papier'){
                printMessage('Remis, spróbuj jeszcze raz :D');
            }
            if(agrComputerMove =='kamień' && agrPlayerMove == 'nieznany ruch'){
                printMessage('Nieznany ruch');
            }
            if(agrComputerMove =='papier' && agrPlayerMove == 'nieznany ruch'){
                printMessage('Nieznany ruch');
            }
            if(agrComputerMove =='obcęgi' && agrPlayerMove == 'nieznany ruch'){
                printMessage('Nieznany ruch');
            }
        }
    displayResult(computerMove,playerMove);
            
        //printMessage(Math.random());
    /*if( randomNumber =='1' && playerInput == '2'){
        printMessage('Ty wygrywasz!');
    }
    if( randomNumber =='2' && playerInput == '3'){
        printMessage('Ty wygrywasz!');
    }
    if( randomNumber == '3' && playerInput == '1'){
        printMessage('Ty wygrywasz!');
    }
    if( randomNumber =='2' && playerInput == '1'){
        printMessage('Przegrałeś, spróbuj jeszcze raz!');
    }
    if(randomNumber =='3' && playerInput == '2'){
        printMessage('Przegrałeś, spróbuj jeszcze raz!');
    }
    if(randomNumber =='1' && playerInput == '3'){
        printMessage('Przegrałeś, spróbuj jeszcze raz!');
    }
    if(randomNumber =='3' && playerInput == '3'){
        printMessage('Remis, spróbuj jeszcze raz :D');
    }
    if(randomNumber =='1' && playerInput == '1'){
        printMessage('Remis, spróbuj jeszcze raz :D');
    }
    if(randomNumber =='2' && playerInput == '2'){
        printMessage('Remis, spróbuj jeszcze raz :D');
    }
    if(randomNumber =='1' && playerInput == 'nieznany ruch'){
        printMessage('Nieznany ruch');
    }
    if(randomNumber =='2' && playerInput == 'nieznany ruch'){
        printMessage('Nieznany ruch');
    }
    if(randomNumber =='3' && playerInput == 'nieznany ruch'){
        printMessage('Nieznany ruch');
    }*/

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
