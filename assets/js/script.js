window.onload = function () {
    document.getElementById("back").style.display = 'none';
};

function outputname() {
    var name = document.getElementById("inputname").value;
    document.getElementById("container1").style.display = "none";
    document.getElementById("demo").innerHTML = "Welcome " + name;
    document.getElementById("back").style.display = "";
}

function takeMeBack() {
    document.getElementById("container1").style.display = "";
    document.getElementById("container2").style.display = "none";
    document.getElementById("back").style.display = "none";
}