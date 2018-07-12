var nbr = 0;
function display(num) {
    var inpCrlt = document.getElementById("nbr");
    inpCrlt.value = nbr;
}
function change(amt) {
    nbr += amt;
    display(nbr);
}
function loaded() {
    display(nbr);
}
