var username = prompt('Enter Your name')


function send(e) {
    var message = document.getElementById("message");
    var text = document.getElementById("text");
    var button = document.getElementById("button");

    if (text.value == '') {
        alert('please! write something')
        return
    }
    firebase.database().ref(username).push(text.value)

    var child1 = document.createElement('li')
    child1.setAttribute('class', 'lichild')
    message.appendChild(child1)
    var child2 = document.createElement('p')
    child2.setAttribute('class', 'pchild')
    message.appendChild(child2)
    child2.innerText = "sent by " + username;
    child1.innerText = text.value;

    text.value = "";

}

window.onkeypress = function (e) {
    if (e.keyCode === 13) {
        send()
    }
}



const logOut = () => {
    firebase.auth().signOut()
        .then((result) => {
            window.location.replace("../index.html")
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}
