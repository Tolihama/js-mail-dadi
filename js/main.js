// Refs DOM
const btnMail = document.querySelector('.btn-mail');
const btnDadi = document.querySelector('.btn-dadi');




/*
 * Mail system
 */

// Mail list
const mailList = ['pinco@pallo.it', 'pallo@pinco.it', 'nonno@libero.it'];




/*
 * Dadi
 */ 
btnDadi.addEventListener('click', function() {
    // DOM refs
    const playerResult = document.querySelector('.player-result');
    const computerResult = document.querySelector('.computer-result');
    const winner = document.querySelector('.winner');

    // Random generator
    const userNumber = Math.floor((Math.random() * 6) + 1);
    const computerNumber = Math.floor((Math.random() * 6) + 1);

    // Random print
    playerResult.innerHTML += `User: ${userNumber}`;
    computerResult.innerHTML += `Computer: ${computerNumber}`;

    // Win conditional
    if (userNumber === computerNumber) {
        winner.innerHTML += 'Pareggio.';
    } else if (userNumber > computerNumber) {
        winner.innerHTML('User vince.');
    } else {
        winner.innerHTML += 'Computer vince.';
    }
})