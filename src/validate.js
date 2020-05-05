function usernameCheck(username) {
    if (username.match(/[A-Z]/i) && username.length > 5) {
      return true
    }
    return false
  }
  
  function passwordCheck(password) {
    if (password.length > 8) {
      return true
    }
    return false
  }

console.log(usernameCheck('Ilhambagas'))
console.log(usernameCheck('bagas'))

console.log(passwordCheck('arkademy12345'))
console.log(passwordCheck('admin1'))

  module.export