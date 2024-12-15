document.getElementById('enter').addEventListener('click', function() {
    var name = document.getElementById("name").value;
    var grsc = document.getElementById("grsc").value;

    var userData = {
        "name": name,
        "grsc": grsc
    };

    localStorage.setItem('userData', JSON.stringify(userData));
})

