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
    let computerMove = 'nieznany ruch';
    if(randomNumber == 1){
        computerMove = 'kamień';
    }
    if(randomNumber == 2){
        computerMove = 'papier';
    }
    if(randomNumber == 3){
        computerMove = 'obcęgi';
    }
printMessage('Mój ruch to: ' + computerMove);



    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: obcęgi');
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = 'Nieznany ruch';
    if(playerInput == '1'){
        playerMove = 'kamień';
    }
    if(playerInput == '2'){
        playerMove = 'papier';
        //location.reload();
    }
    if(playerInput == '3'){
        playerMove = 'obcęgi';
    }
    
    printMessage('Twój ruch to: ' + playerMove);
    
    //printMessage(Math.random());
if( randomNumber =='1' && playerInput == '2'){
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
}