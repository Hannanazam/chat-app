
// const facebook_login = () =>{
//     var provider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         var token = result.credential.accessToken;
//         var user = result.user;
//         window.location = "home/index.html"

//         console.log(user)

//       }).catch(function(error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         var email = error.email;
//         var credential = error.credential;
//         console.log(error.message)
//       });
// }

let create_account = ()=>{
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((result) =>{
        window.location.replace("../home/index.html")

    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });

      email.value = '';
      password.value = '';
}
let create = ()=>{

    window.location.replace("Create account/index.html")

}