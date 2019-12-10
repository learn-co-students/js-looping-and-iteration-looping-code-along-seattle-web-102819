// Code your solutions in this file

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}
