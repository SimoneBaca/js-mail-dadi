/*Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/

const emailList = ['pino@gmail.com', 'tino@gmail.com', 'lino@gmail.com', 'gino@gmail.com'];
console.log(emailList);

const userButton = document.querySelector('main .email_button');
console.log(userButton);

const userOutput = document.querySelector('main .output');
console.log(userOutput);

userButton.addEventListener('click',
function()  {
    let userInput = document.querySelector('main .email_input').value;
    console.log(userInput);
        console.log(userInput);
        let check = false;
       for(let i = 0; i < emailList.length; i++ ) {
        {
            if (userInput === emailList[i]) {
                check = true;
            }
        }
        if (check === true){
            console.log("correct");
            userOutput.innerHTML += "correct";
        } else{
            console.log("uncorrect");
            userOutput.innerHTML += "uncorrect";
        }
    }
}
    
)
