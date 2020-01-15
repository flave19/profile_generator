const readline = require('readline');
let emptyarr = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  emptyarr.push(answer)
  
  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`)
    emptyarr.push(answer)

    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      emptyarr.push(answer )

      rl.question('What\'s your favourite meal?', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`)
        emptyarr.push(answer) 

        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`)
          emptyarr.push(answer)
      

          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`)
            emptyarr.push(answer)

            rl.question('What is your superpower?', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`)
              emptyarr.push(answer)
          
              console.log(`you name is ${emptyarr[0]} and you like doing ${emptyarr[1]} while listing too ${emptyarr[2]}. You love to eat ${emptyarr[4]} for ${emptyarr[3]} while watching ${emptyarr[5]}. You super power is ${emptyarr[6]}`)
              
              rl.close();
            })
          })
        })
      })
    })
  })          
});

