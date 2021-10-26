/*
 * Dadi
 */ 

// Random generator
const userNumber = Math.floor((Math.random() * 6) + 1);
const computerNumber = Math.floor((Math.random() * 6) + 1);

// Random console.log
console.log('User number:', userNumber);
console.log('Computer number:', computerNumber);

// Win conditional
if (userNumber === computerNumber) {
    console.log('Pareggio.');
} else if (userNumber > computerNumber) {
    console.log('User vince.');
} else {
    console.log('Computer vince.');
}