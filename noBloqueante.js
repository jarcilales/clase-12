let myTime = Date.now()

const endTime = myTime + 3000

function printTwo() {
    console.log(2)
}
console.log(1)

while(myTime < endTime) {
    myTime = Date.now()
}

setTimeout(printTwo,0)
for(let i=0; i<100000;i++) {}
console.log(3)

