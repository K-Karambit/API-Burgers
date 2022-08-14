function getBurger() {
    let burger = document.getElementById("burgerGet").value;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("Weather").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "https://my-burger-api.herokuapp.com/burgers?id=" + burger, true);
    xhttp.send();
}