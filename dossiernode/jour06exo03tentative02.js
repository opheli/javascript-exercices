let prompt = require("prompt");
prompt.start();

function checkProfile() {
    let pro = { 
        properties: {
        email: {
          pattern: /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/,
          message: 'Must be only a Email',
          required: true,
    
        },
        name: {
          pattern: /^[a-zA-Z\s\-]+$/,
          message: 'Name must be only letters, spaces, or dashes',
          required: true
        },
        password: {
          pattern: /^(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
          message: 'Password should be at least one capital letter, one small letter, one number and 6 character length',
          hidden: true
        },
      }
    };
      let callback = function (error, result) {
        console.log('Command-line input received:');
        if ('  password: ' + result.password) {
          console.log("good");
        }
      
        console.log('  Email: ' + result.email);
        console.log('  name: ' + result.name);
        console.log('  password: ' + result.password);
      }
   
 prompt.get(pro, callback)
}

checkProfile();