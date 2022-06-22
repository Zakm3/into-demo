let harryAttack = 25
let lordVAttack = 35

if(harryAttack > lordVAttack){
    console.log("Harry has a better attack than Lord V")
} else if (lordVAttack > harryAttack) { 
    console.log("lord v has a better attack than harry")
} else {    
    console.log("Harry and lord V have the same attack")
}

let harryHealth = 100
let harryDefense = 0

// Lord V attacks harry

if( harryHealth <= lordVAttack){
    console.log("Harry has been slain")
} else {
    harryHealth -= lordVAttack
    console.log(`Harry's health is down ${harryHealth}`)
}

harryDefense += 25

if(harryHealth <= (lordVAttack-harryDefense)){
    console.log("harry has been slain")
} else {
    harryHealth -= (lordVAttack - harryDefense)
 console.log(`Harry's health is down ${harryHealth}`)
}

let healthKit = 50

if((harryHealth + healthKit) >= 100){
    harryHealth = 100
} else {
    harryHealth += healthKit
} console.log(`harry got some help. health is now ${harryHealth}`)

let coinTossHeads = false

if(coinTossHeads === true){
    console.log("the fight continues")
} else {
    console.log("harry is allowed to run away")
}

// for(let i=0; i<11; i++){
    
//     if (harryHealth <= 0){
//         console.log("Harry has been slain")
// } else {
//     harryHealth -= (lordVAttack - harryDefense)
//     console.log(`Harry's Health is ${harryHealth}`)
// }
// }

while(harryHealth > 0){
    harryHealth -= (lordVAttack - harryDefense)
         console.log(`Harry's Health is ${harryHealth}`);

         if(harryHealth <=0){
            console.log("harry has been slain")
         }
} 