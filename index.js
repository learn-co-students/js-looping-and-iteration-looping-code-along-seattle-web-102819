// Code your solutions in this file
function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}

function countDown(n) {
    let count = n;
    while (count > -1) {
        console.log(count--);
    }
}