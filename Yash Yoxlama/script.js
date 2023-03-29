function checkAge() {
    var dobInput = document.getElementById("dob");
    var dob = new Date(dobInput.value);
    var age = calculateAge(dob);

    if (age < 18) {
        alert("Icaze Yoxdur!!!");
        return;
    }

    alert("Giriş icaze verildi.");
}

function calculateAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}