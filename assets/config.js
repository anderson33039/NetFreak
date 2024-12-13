const sect = document.getElementById("section");
//varieties
const hc = document.getElementById("hc");
const al = document.getElementById("al");
const wc = document.getElementById("wc");
const foods = document.getElementById("foods");
const drinks = document.getElementById("drinks");


function showDetails() {
    if (sect.value == "HC") {
        hc.hidden = false;
        al.hidden = true;
        wc.hidden = true;
        foods.hidden = true;
        drinks.hidden = true;
    };
    if (sect.value == "AL") {
        al.hidden = false;
        hc.hidden = true;
        wc.hidden = true;
        foods.hidden = true;
        drinks.hidden = true;
    };
    if (sect.value == "WC") {
        wc.hidden = false;
        hc.hidden = true;
        al.hidden = true;
        foods.hidden = true;
        drinks.hidden = true;
    }
    if (sect.value == "FOODS") {
        foods.hidden = false;
        wc.hidden = true;
        hc.hidden = true;
        al.hidden = true;
        drinks.hidden = true;
    }
    if (sect.value == "DRINKS") {
        drinks.hidden = false;
        foods.hidden = true;
        wc.hidden = true;
        hc.hidden = true;
        al.hidden = true;
    }
}
document.querySelectorAll("#hc #btn").forEach(button => {
    button.addEventListener('click', function(event) {
        const student_name = document.getElementById('name').value;
        const student_grsc = document.getElementById("grsc").value;
        
        const blob = new Blob(["Name: " + student_name + "\nGrade/Section: " + student_grsc + "\n\nOrder: " + this.value], {type: 'text/plain'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'receipt.txt';
        link.click();
    });
});
