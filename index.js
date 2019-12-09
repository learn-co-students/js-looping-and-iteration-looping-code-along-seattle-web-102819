function writeCards(arrOfStrNames, eventName) {
    const cards = []
    for (let i = 0; i < arrOfStrNames.length; i++) {
        cards.push(`Thank you, ${arrOfStrNames[i]}, for the wonderful ${eventName} gift!`)
    };
    return cards;
}

function countDown(n) {
    let count = (n)
    while (count >= 0) {
        console.log(count--);
    }
}