"use strict"

// LOOPS
// FOR
const products = ["keyboard", "mouse", "pen", "pen", "pad", "monitor", "iphone"];
  const colors = ["red", "green", "blue"]
  let showCount = 5
  document.write(`<h1>Show ${showCount} Products</h1>`)
  for (let i = 0; i < showCount; i++) {
    document.write(`<div>`);
    document.write(`<h3>[${i + 1}]${products[i]}</h3>`)
      for (let j = 0; j < colors.length; j++){
          document.write(`<p>${colors[j]}</p>`)
      }
      document.write(`<p>${colors.join(" | ")}`)
    document.write(`</div>`);
  }

// WHILE (the condition needs to be true)
const englishCourse = ["nouns", "verbs", "adjectives", "phrases", "books", "course", "grammar"]
let index = 0;
while (index < englishCourse.length){ 
    document.write(`<div>`)
    document.write( `${englishCourse.join(" | ")}`)
    index += 1
    document.write(`</div>`) 
}
// document.write( `${englishCourse.join(" | ")}`)
// i managed to seperate it by creating a div


// DO WHILE
const friends = ["Ahmed", "Amine", "Imen", "Bochra", "Hamida", "Hamadi"]
let i = 0
do {
    console.log(i)
        i++
} while (false)


// FUNCTION
function sayHello(userName, age){
 let names = document.write(`Hello ${userName}, your age is ${age} years old. `)
 let ourNames = document.write(`Hi it's me, ${userName}.`)
 console.log(names) //on the console log it's undefined, console log doesnt understand this command(document.write)
}
/*sayHello("Ghada", 15);
sayHello("Armin", 20);
sayHello("Eren", 30);*/
 document.write(` This is ${sayHello("Ghada", 23)}`) // not working too
// not working too ${age} > 18 ? document.write("Watch Attack Ontitan") : document.write("Grow up")


function generateYears(start, end, exclude){
    for (let i = start; i <= end; i++) {
        // console.log(i)
        if (i === exclude){
            continue
        }
        document.write(`${(i)} `)
    }
}
generateYears(1982,2021,2020 )

function calc(num1, num2){
  return num1 + num2 //nothing comes after return
}
const result = calc(30, 50)
document.write(result + 100)

function generate(Start, End){
  for (let e = Start; e <= End; e++){
    if (e === 20){
      return "Interupting"
    }
document.write(" " + e )  }  
}
const results = generate(10, 100)


const birthyear =  function (num3, num4){
 return num4 - num3
}
birthyear(1993, 2021)
console.log(birthyear(1993, 2021))

if (birthyear < 15){
  console.log(true)
}else {
console.log(false)}

















