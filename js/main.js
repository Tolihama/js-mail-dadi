// GENERAL Refs DOM
const btnMail = document.querySelector('.btn-mail');
const btnDadi = document.querySelector('.btn-dadi');

/*
 * Mail system script
 */

// Mail list
btnMail.addEventListener('click', function() {
    // DOM refs
    const mailInput = document.getElementById('email');
    const mailResult = document.querySelector('.mail-result');

    // Data input
    const mailList = ['pinco@pallo.it', 'pallo@pinco.it', 'nonno@libero.it'];
    const mail = mailInput.value.trim().toLowerCase();

    // Mail input check
    if (mail === '') {
        alert('Inserire indirizzo e-mail');
    } else {
        let emailFound = false;

        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i] === mail) {
                emailFound = true;
                break;
            }
        }

        if (emailFound) {
            mailResult.innerHTML = 'Indirizzo trovato.';
        } else {
            mailResult.innerHTML = 'Indirizzo NON trovato.';
        }
    }
})


/*
 * Dadi Script
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
    playerResult.innerHTML = `User: ${userNumber}`;
    computerResult.innerHTML = `Computer: ${computerNumber}`;

    // Win conditional
    if (userNumber === computerNumber) {
        winner.innerHTML = 'Pareggio.';
    } else if (userNumber > computerNumber) {
        winner.innerHTML = 'User vince.';
    } else {
        winner.innerHTML = 'Computer vince.';
    }
})