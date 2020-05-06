const identity = require('./src/identity')
const {usernameCheck, passwordCheck} = require('./src/validate')

for(key in identity){
    console.log(identity[key])
}

console.log(usernameCheck('Ilhambagas92'))
console.log(passwordCheck('arkademy123'))
