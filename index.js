//MAGIC 8 BALL EXERCISE 

let userName = 'scot'

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Will I get a job soon?'
console.log(`${userName} has asked ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''

switch(randomNumber) {
  case 0 :
    eightBall = 'It is certain';
    break;
  case 1 :
    eightBall = 'It is decidedly so';
    break;
  case 2 :
    eightBall = 'Reply hazy try again';
    break;
  case 3 :
    eightBall = 'Cannot predict now';
    break;
  case 4 :
    eightBall = 'My sources say no';
    break;
  case 5 :
    eightBall = 'Signs point to yes';
    break;
  case 6 :
    eightBall = 'It is decidedly so';
    break;
  case 7 :
    eightBall = 'It is decidedly so';
    break;
}

console.log(`The magic eight ball says ${ eightBall }`);
//////////////////////////
/////////////////////////

//Runner registration exercise 

let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegister = true;

const age = 18;

if(earlyRegister && age > 18 ) {
  raceNumber += 1000
}

if(earlyRegister && age > 18 ) {
  console.log(`Competitor ${raceNumber} will begin the race at 9:30am.`)
} else if (age > 18 && earlyRegister === false){
  console.log(`Competitor ${raceNumber} will begin the race at 11:00am.`)
} else if( age < 18) {
  console.log(`Competitor ${raceNumber} will begin the race at 12:30am.`)
} else if( age === 18) {
  console.log(`Competitor ${raceNumber} will need to see the front desk!`)
}