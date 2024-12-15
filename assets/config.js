document.getElementById('enter').addEventListener('click', function() {
    var name = document.getElementById("name").value;
    var grsc = document.getElementById("grsc").value;

    var userData = {
        "name": name,
        "grsc": grsc
    };

    localStorage.setItem('userData', JSON.stringify(userData));
})

function saveReceipt() {
    var storedData =localStorage.getItem('userData');
    var userData = JSON.parse(storedData);
    var meow = localStorage.getItem('product');
    var arf = localStorage.getItem('revise');
    var price = localStorage.getItem('price');

    const blob = new Blob(["Name: " + userData.name + "\nGrade/Section: " + userData.grsc + "\n\nOrder: " + meow + "(" + arf + ")\nPrice: " + price], {type: 'text/plain'});

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'receipt.txt';
    link.click();
}
