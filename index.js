// Code your solutions in this file

function writeCards(listOfNames, eventName) {
    let arr = [];
    for (let i = 0; i < listOfNames.length; i++) {
       arr.push(`Thank you, ${listOfNames[i]}, for the wonderful ${eventName} gift!`);
      }
      return arr;
}




writeCards(["Ada", "Brendan", "Ali"], "birthday");




function countDown(n) {
    while ( n >= 0 ) {
        console.log(n);
        n--;
    }
        return n;
}

countDown(10);