const { log } = require('console');
const os=require('os')

//info about user
const user=os.userInfo()
console.log(user);

//method returns the system up time in seconds
console.log(`The system up time is ${os.uptime()} seconds`);


const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freeme:os.freemem(),
}

console.log(currentOS);