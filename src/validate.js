 const validate = {
   usernameCheck: (username) => {
    if ((username.match(/[A-Z]/i) || (username.match(/[0-9]/))) && username.length > 5) {
      return true
    }
    return false
  },
  
  passwordCheck: (password) => {
    if (password.length > 8) {
      return true
    }
    return false
  }
}


  module.exports = validate