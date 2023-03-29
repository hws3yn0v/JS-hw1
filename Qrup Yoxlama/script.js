function btn() {
    var input = document.getElementById("groupNo");
    var number = input.value;

    var secondDigit = number.charAt(1);
    var color;

    switch (secondDigit) {
        case "1":
            color = "yellow";
            break;

        case "2":
            color = "orange";
            break;

        case "3":
            color = "blue";
            break;
        
        default:
            color = "white";
            break;
    }

    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = color;
}