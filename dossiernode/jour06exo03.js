var prompt = require ('prompt') ;
function checkProfile(){
  var schema = {
    properties: {
      username : {
        pattern: /^[a-zA-Z0-9 \-]+$/,
        message: 'Error',
        required: true
      },
      email: {
        name: 'email',
        pattern:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Error',
        required: true
      },
      password: {
        pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9\-a-zA-Z]{6,}$/,
        required: true
        //
      }
    }
  };
  let callback = function(error, result){
    console.log("result", result);
    console.log('All good !');
  }
  prompt.get(schema, callback)
}