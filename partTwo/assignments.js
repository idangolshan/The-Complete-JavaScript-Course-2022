'use strict';

// Coding Challenge #1
const calcAverage = (firstScore, secondScore, thirdScore) => ((firstScore + secondScore + thirdScore) / 3)


const dolphinsAvg = calcAverage(44,23,71);

const koalasAvg = calcAverage(65,54,49);

function checkWinner (dolphinsAvg, koalasAvg) {
  if (dolphinsAvg >= koalasAvg*2) {
    console.log(`Dolphins are the winners ${dolphinsAvg} to ${koalasAvg}`);
  } else if (koalasAvg >= dolphinsAvg*2) {
    console.log(`Koalas are the winners ${koalasAvg} to ${dolphinsAvg}`)
  } else console.log('No winners :(')
};

checkWinner(dolphinsAvg, koalasAvg);

